import "./index.css";
import upDateDB from "./module/_dbOperation";
import { loginCheck } from "./module/_logincheck";
loginCheck();

document.querySelector("#blog-login").addEventListener("click",(e)=>{
    const blogTitle=document.querySelector("#Blog-name").value;
    const blogURL=document.querySelector("#Blog-URL").value;
    const img=document.querySelector("#Blog-img-URL").value;
    let obj={
        "title":blogTitle,
        "url":blogURL,
        "img":img
    }
    upDateDB("blog",obj);
})