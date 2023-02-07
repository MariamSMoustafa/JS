var cancel =false;
while(!cancel){
    var age=Number(prompt("Enter your Age"));
    if(age<=0)
    {
        alert("you must enter positive number")
    }else{
        if(age>=1 && age<=10)
        {
            alert("Child");
        }else if(age>=11 && age<=18){
            alert("Teenager");
        }else if(age>=19 && age<=50){
            alert("Grown ");
        }else if(age>50){
            alert("Old ");
        }
    }
    var answer = prompt("do you want to exit (yes,no)");
    if(answer=="no")
    {
        cancel = true;
    }

}

