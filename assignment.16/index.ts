let guestList = ["Wajiha" , "Muneeba" , "Farha" , "Ayesha"];

let dontCome = guestList[0];

console.log(dontCome, "Sorry! I cant come.");

guestList.splice(0 , 1, "Arfeen");

console.log("Guys! We have found a bigger table for dinner");
// adding guest in starting index of array
guestList.unshift("Samia");

//adding guest on ending index of array
guestList.push("Shariq");

//get a guest on middle index of array
let middleIndex: number= Math.floor(guestList.length / 2);

//adding guest on middle index
guestList.splice(middleIndex, 0 , "Aeraf");

//print message of updated list
console.log("Updated list of our guests");

//sending invitation
guestList.forEach(oneGuest => console.log(`Hello ${oneGuest}, would you like to dinner with me`));