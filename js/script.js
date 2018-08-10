 function triangle(){
 var triangle;
 triangle = document.getElementById("enter a number").value;
 }
var a= prompt("Enter the first number");
var b= prompt("Enter the second number");
var c= prompt("Enter the third number");
if(a===b && b===c){
alert( "This is an Equilateral triangle")
}
else if(a===b || b===c){
alert("This is an Isosceles triangle")
}
else if(a!==b && b!==c){
alert("This is a scalene triangle ")
}
else if(a+b<c || a+c<b || b+c<a){
alert("NOT a triangle")
}
