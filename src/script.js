import { app } from "./firebase-init";
import { getDatabase, set, ref, get, push, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import './index.css'
app;
const database=getDatabase(app);

async function readDB(reference) {
    return await get(ref(database, reference));
}

function writeDB(reference, data) {
    set(ref(database, reference), data);
  }

const auth = getAuth();

document.querySelector("#submit").addEventListener("click",async ()=>{
    const eventName=document.querySelector("#name").value;
    const eventDate=document.querySelector("#date").value;
    const eventDes=document.querySelector("#des").value;
    const eventurl=document.querySelector("#url").value;
    const obj={
        'name':eventName,
        'date':eventDate,
        'des':eventDes,
        'url':eventurl
    }
    let dataArr=await readDB("data") || [];
    dataArr=await dataArr.val();
    if(dataArr!== null){
        dataArr=[...dataArr];
    }
    else{
        dataArr=[];
    }
    dataArr.push(obj);
    writeDB("data",dataArr);
});


onAuthStateChanged(auth,(user)=>{
    if(user){
        console.log(user);
    }
})

document.querySelector("#submit-btn").addEventListener("click",()=>{
    const email=document.querySelector('#username').value;
    const password=document.querySelector("#password").value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        document.querySelector("form").classList.remove("none");
        document.querySelector(".login-form").classList.add("none");
    // ...
    })
    .catch((error) => {
        console.log(error);
        alert("wrong password");
    });

})