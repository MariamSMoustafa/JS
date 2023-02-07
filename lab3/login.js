var username=prompt("enter your Username ");
var password=prompt("enter your Password ");

if(username=="admin" && password=="421$$")
{
    alert("Welcome login success");
}
else{
    if(username!="admin"){
        alert("The username is incorrect!")
    }else if(password!="421$$"){
        alert("The password is incorrect!")
    }
}