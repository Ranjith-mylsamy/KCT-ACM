import "./index.css";
import { loginCheck } from "./module/_logincheck";
loginCheck();

document.querySelector(".btn").addEventListener("click",()=>{
    const name=document.querySelector("#Event-name").value;
    const des=document.querySelector("#Event-des").value;
    const url=document.querySelector("#Event-URL").value;
    const date=document.querySelector("#Event-date").value;
    const obj={
        "name":name,
        "date":date,
        "des":des,
        "url":url
    }
    console.log(obj);
});