function show_magicians(magicians: string[]) {
    magicians.forEach((name) => console.log(name));
  }
  

  //making another function with statement
  function make_great(magicians:string[]){
   return magicians.map(name => `The great ${name}!`)
  }

  //making array of magician names
  let magicianName = ["Criss angel", "Dynamo", "David copperfield"];

  //making copy of array
  let copy_magician = magicianName.slice();

  //modifying array by including THE GREAT with their names
  let copy_great_magicians = make_great(copy_magician);

  //printing both original and copied arrays
  //original
  show_magicians(magicianName);

  //copied
  show_magicians(copy_great_magicians);