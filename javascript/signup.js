let mob=document.getElementById("mob");
let email=document.getElementById("email");
let pwd=document.getElementById("pwd");




function validate()
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let pwd1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  let email1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3}?)$/;
  if(mob.value.match(phoneno))   
     { 
    return true;
      }
      else
      {
         alert("Phone number should be a 10 digit number");
         return false;
      }
     if(email.value.match(email1)) 
     {
         return true;

     }
     else{
         alert("Email id is not a valid one")
         return false;
     }
     if(pwd.value.match(pwd1))
     {
        return true;
    }
    else{
        alert("password should contain atleast 1 Uppercase,lowercase,digit and special character")
    }
        
}
