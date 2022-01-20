import { getDatabase, ref, push, update, child } from "firebase/database";
import { app } from "../firebase-init";
const db=getDatabase(app);

async function upDateDB(path,value){
    const key=await push(child(ref(db),path)).key;
    const updates=await {};
    updates[`/${path}/${key}/`]=await value;
    await  console.log(updates,key);
    await update(ref(db),updates);
    await alert("Data uploded successfully");
}

export default upDateDB;