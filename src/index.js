import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase-init";
import './index.css'
app;
const auth = getAuth();


onAuthStateChanged(auth,(user)=>{
    if(user){
        console.log(user);
    }
})


document.querySelectorAll(".btn").forEach(d=>{
    d.addEventListener("click",(e)=>{
        const email=document.querySelector('#username').value;
        const password=document.querySelector("#password").value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem("login",true);
            switch(e.target.textContent){
                case "Blog login":
                    window.location.href='./blog.html';
                    break;
                case "Event login":
                    window.location.href='./form.html';
                    break;
                case "Team login":
                    window.location.href='./team.html';
                    break;
            }
        })
        .catch((error) => {
            console.log(error);
            alert("wrong credentials");
        });
    })
})