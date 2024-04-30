"use strict";
let guestList = ["Wajiha", "Muneeba", "Farha", "Ayesha"];
let dontCome = guestList[0];
console.log(dontCome, "Sorry! I cant come.");
guestList.splice(0, 1, "Arfeen");
console.log("Guys! We have found a bigger table for dinner");
// adding guest in starting index of array
guestList.unshift("Samia");
//adding guest on ending index of array
guestList.push("Shariq");
//get a guest on middle index of array
let middleIndex = Math.floor(guestList.length / 2);
//adding guest on middle index
guestList.splice(middleIndex, 0, "Aeraf");
//print message of updated list
console.log("Updated list of our guests");
//sending invitation
guestList.forEach(oneGuest => console.log(`Hello ${oneGuest}, would you like to dinner with me`));
console.log("Sorry guys unfortunately the dinner table wont arrive on time, so i can only invite two Guests.");
//using while loop to remove guests
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest} I cant invite you to dinner.`);
}
;
console.log("Invitation for the last two Guests");
guestList.forEach(lastTwo => console.log(`Luckily ${lastTwo} you are invited for dinner!`));
//removing guests
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
