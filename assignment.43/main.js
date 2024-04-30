function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//making another function with statement
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name, "!"); });
}
//making array of magician names
var magicianName = ["Criss angel", "Dynamo", "David copperfield"];
//making copy of array
var copy_magician = magicianName.slice();
//modifying array by including THE GREAT with their names
var copy_great_magicians = make_great(copy_magician);
//printing both original and copied arrays
//original
show_magicians(magicianName);
//copied
show_magicians(copy_great_magicians);
