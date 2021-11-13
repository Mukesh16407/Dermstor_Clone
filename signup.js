document.querySelector("button").addEventListener("click", signUp);
    
var userArr = JSON.parse(localStorage.getItem("DreamUser")) || [];

function signUp() {
   var user = document.getElementById("user").value;  
   var email = document.getElementById("email").value; 
   var email1 = document.getElementById("email1").value; 
   var pass = document.getElementById("pass").value; 
   var pass1 = document.getElementById("pass1").value; 
   var phone = document.getElementById("phone").value; 
   var referral = document.getElementById("referral").value;

 
 var DreamStoreuser ={
     username:user,
     emaiAddress: email,
     emaiAddress1: email1,
     passWord:pass,
     passWord1:pass1,
     phoneNo:phone,
     referral:referral
    };
    console.log(DreamStoreuser)
   if(user.length === 0 || phone.length === 0 || pass.length < 6 || email.length == 0  || email.value != email1.value || pass.value != pass1.value){
    document.getElementById("user").style.borderColor = "red";
    document.getElementById('user1').textContent = 'Full Name is a required field';
    document.getElementById('user1').style.backgroundColor="rgb(250,232,230)";

    document.getElementById("email").style.borderColor = "red";
    document.getElementById('email2').textContent = 'Email address is a required field';
    document.getElementById("email2").style.backgroundColor = "rgb(250,232,230)";

    document.getElementById("pass").style.borderColor = "red";
    document.getElementById('email3').textContent = 'Please Fill Same Email';
    document.getElementById("email3").style.backgroundColor = "rgb(250,232,230)";

    document.getElementById('pass3').textContent = 'Please Fill Same Password';
    document.getElementById("pass3").style.backgroundColor = "rgb(250,232,230)";
   
   }
   else{
        userArr.push(DreamStoreuser);
        localStorage.setItem("DreamUser", JSON.stringify(userArr))
        window.location.href ="login.html"
   }
 // redirect the user to signin page
}