function make_album(artist_name:string , album_title:string , tracks?:number){
     let album : {artist:string , title:string , tracks?:number} = {
        artist: artist_name,
        title : album_title,
       

     };

     if(tracks !== undefined){
        album.tracks = tracks;
     }
      return album;
}

//creating 1st album
let album1 = make_album("Taylor Swift" , "Gorgeous");
console.log(album1);

//creating 2nd album
let album2 = make_album("Olivia" , "Happier");
console.log(album2);

//creating 3rd album
let album3 = make_album("Ed Sheeran" , "Perfect" , 1);
console.log(album3);