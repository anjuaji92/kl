let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let pwd1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

function validate()
{
    // if(email.value==""||pwd.value=="")
    // {
    //     alert("All Fields are mandatory")
    //     return false;
    // }
    // else if(pwd.value.length <= 8)
    // {
    //     alert("password can't be too short");
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
    if(pwd.value.match(pwd1))
    {
        alert("success")
        pwd.style.border="1px solid grey";
        return  true;
    }
    else
    alert("password should contain atleast 1 Uppercase,lowercase,digit and special character");
    pwd.style.border="2px solid red";
    return false;
}
