let guestList = ["Warisha" , "Muneeba" , "Farha"];
let dontCome = guestList[0];

console.log(dontCome, "Sorry! I cant come.");

guestList.splice(0 , 1 , "Wajiha");

guestList.forEach(guest => console.log(`Hello! ${guest}, Would you like to do a dinner with me?`))