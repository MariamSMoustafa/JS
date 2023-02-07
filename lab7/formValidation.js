function login(elem){
    var n = document.getElementById("userName").value;
    var p = document.getElementById("password").value;
    console.log(n);
    console.log(password);
    if(n===""||p==="")
    {
        alert("please enter user name and password");
    }
    else if(n==="admin"&&p==="123"){
        alert("welcome");
    }
    else{
        alert("you are not login")
    }
}
