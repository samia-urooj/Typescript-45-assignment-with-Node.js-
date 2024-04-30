//making array of fav places to visit
let favPlaces = ["Korea", "Singapore" , "China", "UAE", "Thailand"];
console.log("Original order:" , favPlaces);

//print the array in alphabetical order
console.log("Alphabetical order:", [...favPlaces].sort());

//showing the array is still in its original order
console.log("Still in its original order:", favPlaces);

//printing array in reverse alphabetical order
console.log('Reverse alphabetical order:', [...favPlaces].sort().reverse());

//again showing that array is still in its original order
console.log("Still in its original order:", favPlaces);

//reverse the array
console.log("Original array reversed", favPlaces.reverse());

//again reverse the order to its original order
console.log("Back to its original order:", favPlaces.reverse());

//sorting array in alphabetical order
console.log("Sorted in alphabetical order:", favPlaces.sort());

//sorting array in reversed alphabetical order
console.log('Reverse alphabetical order:', [...favPlaces].sort().reverse());