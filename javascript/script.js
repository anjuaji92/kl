let email=document.getElementById("email");
let pwd=document.getElementById("pwd");

function validate()
{
    if(email.value==""||pwd.value=="")
    {
        alert("All Fields are mandatory")
        return false;
    }
    else
    return true;
}
