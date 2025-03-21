const reg=()=>{
    let name=document.querySelector('#name').value;
    let email=document.querySelector('#email').value;

    let mobile=document.querySelector('#mobile').value;

    let pass=document.querySelector('#pass').value;
    let cpass=document.querySelector('#cpass').value;
    console.log(name,email,mobile,pass,cpass)
   

    if (name==''){
        window.alert("please enter your name");
        document.querySelector("#name").focus();
        return false;
    }
    else if(email==''){
        window.alert("please enter your email");
        document.querySelector("#email").focus();
        return false;
    }
    else if(!(email.includes('@'))){
        window.alert("please includes @ in  email field");
        document.querySelector("#email").focus();
        return false;
    }
    else if(!(email.includes('.com'))||(email.includes('.in'))){
        window.alert("please enter proper email address");
        document.querySelector("#email").focus();
        return false;
    }
    else if(mobile==''){
        window.alert("please enter your mobile number");
        document.querySelector("#mobile").focus();
        return false;
    }
    else if(mobile.length !=10){
        window.alert("number should be 10 digit");
        document.querySelector("#mobile").focus();
        return false;
    }
   
    else if(pass==''){
        window.alert("please enter your number");
        document.querySelector("#pass").focus();
        return false;
    }
    else if(pass.length<8){
        window.alert("password should be more than 8 character");
        document.querySelector("#pass").focus();
        return false;
    }
    else if(pass!=cpass){
        window.alert("password and confirm password does not match");
        document.querySelector("#pass").value="";
        document.querySelector("#pass").focus();
        return false;
    }
}