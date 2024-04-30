function show_magicians(magicians: string[]) {
    magicians.forEach((name) => console.log(name));
  }
  

  //making another function with statement
  function make_great(magicians:string[]){
   return magicians.map(name => `The great magician ${name}!`)
  }

  //making array of magician names
  let magicianName = ["Criss angel", "Dynamo", "David copperfield"];

  let greatMagicians = make_great(magicianName);
  show_magicians(greatMagicians);