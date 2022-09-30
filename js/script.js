
// var titles = document.getElementsByTagName('h1');
// for (var i = 0; i < titles.length; i++) {
//   var title = titles[i];
//   title.innerHTML = '<span class="mono">-</span>' + title.innerHTML;
//   title.addEventListener('click', onClick, true);
//   var relatedDiv = title.nextElementSibling;
//   var collapseMark = title.firstChild;
//   collapseMark.innerText = "+ ";
//   relatedDiv.setAttribute("style", "display: none");
// }

// function onClick(evt){
//   var headerClicked = evt.currentTarget;
//   var relatedDiv = headerClicked.nextElementSibling;
//   var collapseMark = headerClicked.firstChild;
//   var isCollapsed = collapseMark.innerHTML[0] == "+";
//   collapseMark.innerHTML = isCollapsed ? "- ": "+";
//   relatedDiv.setAttribute("style", isCollapsed ? "": "display:none");
// }
 

//     function logNavigation() {
//       console.log('Children of the document')
//       var children = document.childNodes; 
//       for (var i = 0; i < children.length; i++) {
//         logNodeInfo(i, children[i]);
//       }

//       console.log('Children of <body>')
//       var current = document.body.firstChild;
//       var index = 0; 
//       while (current != null) {
//         logNodeInfo(index, current);

//         index++;
//         current = current.nextSibling;
//       } 

//       console.log('Children of <p>')
//       children = document.getElementsByTagName('p')[0]
//         .childNodes;
//       for (var i = 0; i < children.length; i++) {
//         logNodeInfo(i, children[i]);
//       }

//       console.log('Parent of <li>');
//       var parent = document.getElementsByTagName('li')[0]
//         .parentNode;
//       logNodeInfo(0, parent);
//     }

//     function logNodeInfo(index, node) {
//       var nodeVal = node.nodeValue == null
//         ? '{empty}'
//         : node.nodeValue.replace('\n', '{nl}');
//       console.log('  ' + index + ': ('
//         + node.nodeType + ') '
//         + node.nodeName + ' | ' 
//         + nodeVal);
//     }
// f
// 


// var car = function (manuf, type, regno, year){
//   this.manufacturer = manuf;
//   this.type = type;
//   this.regno = regno;
//   this.year = year;
// }
// //create a new car 

// var car = new car("Lexus", "V-SHAPE A-CLASS", "AD-D-124", "2022");
// //Display Car Property

// console.log(car);
// //I forget to Add color 
// car.color = "red";
// car.price = "$50,560";

// var bicycle = function (mf, model, caseNo, mfyear){
//   this.mf = mf;
//   this.model = model;
//   this.caseNo = caseNo;
//   this.mfyear = mfyear;
// }
// var bicycle = new bicycle("NAEK", "PP-VCLASS LITE", "CCL-X34XP-23", "2011");
// console.log(bicycle);

 // alert('<head> Hey, buddies, are you a Nigerian');
// var names = new Object();
//     names.firstName = "James";
//     names.lastName = "Thomas"; 
//    names.age = 29;  
// console.log(names);    
// var obj = new Object();
//       obj.name = "Car";
//       obj.color = "Blue";
//       obj.speed = "240k/h";
//       console.log(obj); 
//       
    // var num1 = new Number(3.14); 
    // var num2 = new Number();
    // var num3 = 256;
    // console.log(typeof num1);
    // console.log(num1);
    // console.log(num1.valueOf());
    // console.log(typeof num2);
    // console.log(num2);
    // console.log(num2.valueOf()); 
    // console.log(typeof num3);
    // console.log(num3); 
    // console.log(num3.valueOf());
    
//     var number = 42;
// var other = number.toString(2);
// console.log(other);
// console.log((52).toString(2));

// function doubleMe(arg){
//    arg = arg * arg * arg;   
//    return arg;
// }
// var num1 = 5;
// var num2 = doubleMe(num1);
// console.log(num1);
// console.log(num2); 

// let a = 4+2;
// console.log(4+2);
// console.log("4+2");
// console.log("4"+"2"); 
// console.log(toString(a));

// const country = "Nigeria";
// const independentDay = 1960;
// console.log(`I live in ${country} who got her independent in `+independentDay);
// const name = "James";
// const age = 29;
// const birthDate = "Sept"+11;
// console.log(`My name is ${name},\nI am ${age} years old,\nI was born on ${birthDate}`);
// console.log(birthDate);  

// const pi = 3.14;
// const radius = 3.7;
// const perimeter = 2 * pi * radius;
// console.log(perimeter);

// let firstName = "First Name:";
// let surname = "Surname:";
// let name = prompt(firstName);
// let other = prompt(surname);
// alert(`Hello, ${name} ${other}!`); 
// 
// let rawPrice = prompt("Enter Raw Price:");
// let VAT = 0.206;
// let totalPrice = VAT * rawPrice+1200;
// alert(`Final Price: ${totalPrice}`);

// let celcius = prompt("Enter Temperature in Celcius:");
// let farhenheit = (celcius * 9/5)+32;
// alert(`Temperature in Farhenheit: ${farhenheit}`);  

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);
// 
// const y = 7;
// console.log(String(y)+1);

// const num = 99;     
// if((num > 0) && (num < 100)){
//     console.log(`${num} is between 0 and 100`)
// }
// else if ((num === 0) || (num === 100)){
//     console.log(`The number is exactly ${num}`);  
// }
// else if (!(num < 100)) {
//     console.log(`${num} is not less than or equal to 100`)
// }
// else{ 
//    console.log(String(`${num}  is not a valid number`)); 
// }    
// 
// let today =  prompt("Please Enter today's date:");
// let nextDay = today;
// console.log("Tomorrow is "nextDay);
// let num1 = Number(prompt("Please Enter First Number: "));
// let num2 = Number(prompt("Please Enter Second Number: "));

// if (num1 > num2){
//     console.log(`${num1} is greater than ${num2}`);
// }
// else if (num1 < num2) {
//     console.log(`${num1} is less than ${num2}`);
// }
// else if (num1 === num2) {
//     console.log(`${num1} is equal to ${num2}`);
// }
// else{
//     console.log("The is not a solution to the problem");
// }

var now = new Date();
var y2001 = new Date(1617577200000);
let nextDay = new Date(); 
console.log(now.toLocaleString());
console.log(y2001.toLocaleString());
