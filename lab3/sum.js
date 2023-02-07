var n=Number(prompt("Enter how many the numbers"));
const arr = new Array();
var avg,sum=0;
for(var i=0 ;i<n;i++)
{
     arr[i]=Number(prompt("enter the number"))
     sum=sum+arr[i];
}
document.write(sum);
avg=sum/n;
console.log(avg);
document.write("\n\n\n");
document.write(avg);


