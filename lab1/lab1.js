var fname=prompt("Enter your first name");
var lname=prompt("Enter your last name");
var confMsg=`Is your full name ${fname} ${lname}`;
console.log(isConfirmed)
var isConfirmed=confirm(confMsg);
var BirthYear
if(isConfirmed)
{
    var BirthYear=prompt("Enter your Birth year");
}
document.write('Welcome' +" "+ fname + " " +lname + " " + BirthYear + " years");


