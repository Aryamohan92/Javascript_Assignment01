// using document.write to print out the heading
document.write("<h1>I am Arya Mohan</h1>")
window.alert("I like pizza")
console.log("Hello World!");
const person = { firstName:"Arya" , lastName : "Mohan" , age:31}
console.log(person);
//favorite color
let favoriteColor ="Blue"
console.log("My favorite color is" ,favoriteColor);
//My lucky number
let luckyNumber=3
console.log("My lucky number is ",luckyNumber);
//some built in math functions
console.log(Math.round(4.6));
console.log(Math.max(0, 150, 30, 20, 8, -200));
// my fav Sports
const sports =["Cricket","Hockey","Football","Tennis"];
let text ="<ol>"
for (let i=0; i< sports.length; i++)  {
    text += "<li>"  + sports[i] +"</li>";
}
text +="</ol>" 
document.write("<h2>My Favorite Sports</h2>")
document.write(text)
document.write("<h2>About Me</h2>")
//using document.write to print out the paragraph
document.write("<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem odio atque nulla consequuntur. Assumenda aliquid eos nihil velit cumque animi voluptatem quaerat nemo beatae quae tempora asperiores reprehenderit, repellendus odio?</p>")
//using document.write to print out the image
document.write('<img src="https://t4.ftcdn.net/jpg/05/36/83/13/360_F_536831322_F1fTxf0SquOwRPpOnf9uSjcH3UHeKDKX.jpg" alt="Picture not found" width="600" height="300">');