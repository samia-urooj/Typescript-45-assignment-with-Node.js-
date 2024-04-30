//creating a function with default message
function make_shirt(
  size: string = "Large",
  message: string = "I Love Typescript!"
) {
  console.log(`Creating ${size} size shirt with ${message} prints on it.`);
}
make_shirt();

//printing medium size shirt with default message
make_shirt("Medium");

//printing small size shirt with different message 
make_shirt("Small", "I love Javascript!");