var age=prompt("Enter Your age: ");
var date1 = new Date();
var year1=Number(date1.getFullYear()-age);
document.write("Your Birth Year is", year1);