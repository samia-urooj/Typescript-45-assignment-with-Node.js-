function make_shirt(size, message) {
    return "You selected ".concat(size, " size shirt with ").concat(message, " prints on it.");
}
var result = make_shirt("Medium", "Love yourself!");
console.log(result);
