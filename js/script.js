function triangle(){
 var triangle;
 triangle = document.getElementById("enter a number").value;
 }
var a= parseInt(prompt("Enter the first number"));
var b= parseInt(prompt("Enter the second number"));
var c= parseInt(prompt("Enter the third number"));

if (a===""||b===""||c===""){
alert("Try Again")
}

else if(a===b && b===c){
alert( "This is an Equilateral triangle")
}
else if(a===b || b===c){
alert("This is an Isosceles triangle")
}
else if(a+b<c || a+c<b ||b+c<a){
alert("NOT a triangle")
}
else if(a+b>c || a+c>b || b+c>a){
alert("This is a scalene triangle")
}
else {
alert("Try Again! Empty field")

}
