var h=Number(prompt("enter your hour in 24 hours system : "));
if(h==0||h==24)
   alert("your hour is 12 AM");
else if(h>=1&&h<=11)
   alert("your hour is "+h+" AM");
else if(h>=12&&h<=23)
   alert("your hour is "+(h-12)+" PM");