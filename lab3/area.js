var shape=prompt(" enter the name of the shape you wants to calc area for : ");
if(shape=="Circle"){
    let r=Number(prompt("enter the raduis of circle : "));
    let a=Math.PI*r*r;
    alert("the area of Circle ="+a);
}
else if(shape=="Triangle"){
    let b=Number(prompt("enter the base of Triangle : "));
    let h=Number(prompt("enter the height of Triangle : "));
    let a=0.5*b*h;
    alert("the area of Triangle ="+a);           
}
else if(shape=="Square"){
    let A=Number(prompt("enter the length of side of Square : "));
    let a=A*A;
    alert("the area of Square ="+a);
}
else if(shape=="Rectangle"){
    let l=Number(prompt("enter the length of Rectangle : "));
    let w=Number(prompt("enter the width of Rectangle : "));
    let a=l*w;
    alert("the area of Rectangle ="+a); 
}
    
else if(shape=="Parallelogram"){
    let b=Number(prompt("enter the base of Parallelogram : "));
    let h=Number(prompt("enter the vertical height of Parallelogram : "));
    let a=b*h;
    alert("the area of Parallelogram ="+a); 
}
   
else if(shape=="Trapezium"){
    let a=Number(prompt("enter  the length of  first parallel side of Trapezium : "));
    let b=Number(prompt("enter  the length of  second parallel side of Trapezium : "));
    let h=Number(prompt("enter the height of Trapezium : "));
    let A=0.5*(a+b)*h;
    alert("the area of Trapezium ="+A); 
}
    
else if(shape=="Ellipse"){
    let a=Number(prompt("enter the ½ minor axis of Ellipse : "));
    let b=Number(prompt("enter the  ½ major axis of Ellipse : "));
    let A=Math.PI*a*b;
    alert("the area of Ellipse ="+A); 
}