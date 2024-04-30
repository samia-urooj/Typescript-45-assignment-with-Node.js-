function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//making another function with statement
function make_great(magicians) {
    return magicians.map(function (name) { return "The great magician ".concat(name, "!"); });
}
//making array of magician names
var magicianName = ["Criss angel", "Dynamo", "David copperfield"];
var greatMagicians = make_great(magicianName);
show_magicians(greatMagicians);
