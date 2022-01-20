import "./index.css";
import upDateDB from "./module/_dbOperation";
import { loginCheck } from "./module/_logincheck";
loginCheck();

document.querySelector(".btn").addEventListener("click",()=>{
    let obj={};
    document.querySelectorAll("input").forEach((d,i)=>{
        switch (i){
            case 0:
                obj['name']=d.value;
                break;
            case 1:
                obj['img']=d.value;
                break;
            case 2:
                obj['role']=d.value;
                break;
            case 3:
                obj['linkedin']=d.value;
                break;
            case 4:
                obj['github']=d.value;
                break;
            case 5:
                obj['mail']=d.value;
                break;
            case 6:
                obj['order']=d.value;
                break;
        }
    })
    console.log(obj);
    upDateDB("team",obj);  
})