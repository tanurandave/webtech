
function login()
{
    let username=document.getElementById("username").value;
    console.log(username);
    let password=document.getElementById("password").value;
    console.log(password)
    if(username && password)
    {
        console.log("login....")
    }
    else{
        console.log("fail...")
    }
}