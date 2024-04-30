"use strict";
let cloud = "cloud";
let upperCaseCloud = "CLOUD";
let fifty = 50;
let ten = 10;
let colors = ["Purple", "White", "Blue"];
//test for equality
console.log("Is cloud equal to cloud?");
console.log(cloud == "cloud"); //true
//test for inquality
console.log("Is cloud not equal to cloud?");
console.log(cloud != "cloud"); //false
// test using lowercase function 
//true
console.log("\nIs CLOUD equal to cloud after converting it to lower case?");
console.log(upperCaseCloud.toLocaleLowerCase() == "cloud");
//false
console.log("Is CLOUD not equal to cloud after converting it to lower case?");
console.log(upperCaseCloud.toLocaleLowerCase() != "cloud");
//numerical test
//equality   //true
console.log("\nIs fifty equal to 50?");
console.log(fifty == 50);
//inequality   //false
console.log("Is ten not equal to 10?");
console.log(ten != 10);
//Greater than    //true
console.log("\nIs fifty greater than 20?");
console.log(fifty > 20);
//less than     //false
console.log("Is ten less than 5?");
console.log(ten < 5);
//greater than or equal to    //true
console.log("\nIs fifty greater than equal to ten?");
console.log(fifty >= ten);
//less than equal to
console.log("Is fifty less than equal to 40?");
console.log(fifty <= 40);
//using 'and' and 'or' operators
//&&    true
console.log("\nFifty is not equal to ten and fifty is greater than ten.");
console.log(fifty != ten && fifty > ten);
//false
console.log("Fifty is not equal to ten and fifty is greater than 100.");
console.log(fifty != ten && fifty > 100);
//using || 
//true
console.log("\nTen is greater than fifty OR ten is equal to 10.");
console.log(ten > fifty || ten == 10);
//false 
console.log("Ten is greater than fifty OR ten is not equal to 10.");
console.log(ten > fifty || ten != 10);
//testing whether an item is in an array
console.log("\nIs Purple color include in my array?");
console.log(colors.includes("Purple"));
//testing whether an item is not in an array
console.log("Is Purple color not include in my array?");
console.log(!colors.includes("Purple"));
