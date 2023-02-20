var submit = document.getElementById("submit");

var emailRegex =  /^[a-zA-Z\s]+$/;

submit.addEventListener("click",function(e){
    e.preventDefault();
    var e = document.getElementById("email").value;
    var p = document.getElementById("password").value;
    console.log(e);
    console.log(password);
    if(e===""||p==="")
    {
        alert("please enter email and password");
    }
    
    else if(emailRegex.test(e) === true){
        alert("welcome ,you're valid!");
    }
    else{
        alert("Enter valid email!");
    }

});