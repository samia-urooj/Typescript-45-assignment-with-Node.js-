"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
        //tracks : tracks?
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//creating 1st album
let album1 = make_album("Taylor Swift", "Gorgeous");
console.log(album1);
//creating 2nd album
let album2 = make_album("Olivia", "Happier");
console.log(album2);
//creating 3rd album
let album3 = make_album("Ed Sheeran", "Perfect", 1);
console.log(album3);
