/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["space bound","follow you","zero","happier"];
var images_links = ["https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v_400x400.jpg
 ","
https://cdn.dribbble.com/users/80333/screenshots/4034543/3.jpg
","
https://i.ytimg.com/vi/Zx5670LWOWI/maxresdefault.jpg
","
https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Marshmello_and_Bastille_Happier.png/220px-Marshmello_and_Bastille_Happier.png
"];
var artists = ["","","",""];
var song_lenghts = ["","","",""];
var links = ["","","",""];

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
