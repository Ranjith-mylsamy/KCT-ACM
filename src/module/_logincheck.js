export function loginCheck(){
    let data=localStorage.getItem('login');
    console.log(data);
    if(data==="true"){
        localStorage.setItem("login",false);
    }
    else{
        window.location.href="./index.html";
    }
}