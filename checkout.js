
document.getElementById("formid").addEventListener("submit",formValidation);


var Email = document.getElementById("email").value;
var Name = document.getElementById("name").value;
var Phone = document.getElementById("phone").value;

document.getElementById("myText").defaultValue = "United State";
 console.log(Email)

function formValidation(e) {
  e.preventDefault();

  var gestObj ={
      Email:formid.email.value,
      Name:formid.name.value,
      phone:formid.phone.value
  };
  
   console.log(gestObj)
  
  
 if(Email== "" ){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("WrongEmail").textContent =
    "Email address is a required field";
  document.getElementById("WrongEmail").style.color =
   "rgb(250,232,230)";
   return false
}  
if(Email.indexOf('@') <= 0 ){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("WrongEmail").textContent =
    "** @ invalid Postion";
  document.getElementById("WrongEmail").style.color =
   "rgb(250,232,230)";
   return false
}  
if((Email.charAt(Email.length -4) != ".") && (Email.charAt(Email.length -3) != ".")){
 
  document.getElementById("email").style.borderColor = "red";
  document.getElementById("email2").textContent =
    "** @ invalid Postion";
  document.getElementById("email2").style.color =
   "rgb(250,232,230)";
   return false
} 
if(Name == ""){
        
    document.getElementById("name").style.borderColor = "red";
    document.getElementById('WrongName').textContent = '**Full Name is a required field';
    document.getElementById('WrongName').style.color="rgb(250,232,230)";
    return false
}
  
if(Name.length <= 2){
  document.getElementById("name").style.borderColor = "red";
  document.getElementById('WrongName').textContent = '**Please Fill Valid User Name';
  document.getElementById('WrongName').style.color="rgb(250,232,230)";
  return false
}

if(!isNaN(Name)){
  document.getElementById("name").style.borderColor = "red";
  document.getElementById('WrongName').textContent = '**Only Characters are allowed';
  document.getElementById('WrongName').style.color="rgb(250,232,230)";
  return false
} 




  
  
   if(Phone == ""){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**phone Number is Required';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false
   }
   
   if(isNaN(Phone)){
    Phone.value ="";
    return false
   }
   if(Phone.length < 10){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**Please Enter 10 Digts Number';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false

  }
  if(Phone.length > 10){
    document.getElementById("phone").style.borderColor = "red";
    document.getElementById('wrongPhone').textContent = '**Please Enter 10 Digts Number';
    document.getElementById('wrongPhone').style.color="rgb(250,232,230)";
    return false;
  } else{
      
       alert("Thank you For Share Your Details");
       document.getElementById("detailsCheck").addEventListener("click", function () {
        window.location.href ="product.html"
      });
   }
  //console.log(arrObj);  
}
