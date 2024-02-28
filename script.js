let signupBtn = document.getElementById("signupbtn")
let signinBtn = document.getElementById("signinbtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")

 
 //function register
 function signupbtn(){
    //get all input
    email = Document.getElementById('email').value
    password = Document.getElementById('password').value
    email = Document.getElementById('name').value
    }


signinBtn.onclick= function(){
    nameField.style.maxHeight="0";
    title.innerHTML = "Sign in";
    signupBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}
signupBtn.onclick= function(){
    nameField.style.maxHeight="60px";
    title.innerHTML = "Sign up";
    signupBtn.classList.remove("disable")
    signinBtn.classList.add("disable")
}


