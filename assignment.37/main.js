//creating a function with default message
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript!"; }
    console.log("Creating ".concat(size, " size shirt with ").concat(message, " prints on it."));
}
make_shirt();
//printing medium size shirt with default message
make_shirt("Medium");
//printing small size shirt with different message 
make_shirt("Small", "I love Javascript!");
