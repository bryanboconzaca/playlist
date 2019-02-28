/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["space bound","follow you","zero","happier"];
var images_links = ["https://pbs.twimg.com/profile_images/929030268043845633/ilS1ri2v_400x400.jpg","https://cdn.dribbble.com/users/80333/screenshots/4034543/3.jpg","https://i.ytimg.com/vi/Zx5670LWOWI/maxresdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Marshmello_and_Bastille_Happier.png/220px-Marshmello_and_Bastille_Happier.png"];
var artists = ["eminem","Bring me the horizon "," Imagine dragons","marshmello"];
var song_lengths = ["4:24","3:51","3:31","3:38"];
var links = ["https://youtu.be/JByDbPn6A1o","https://youtu.be/RqQKhSzThyc","https://youtu.be/Zx5670LWOWI","https://youtu.be/RE87rQkXdNw"];

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above



function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(songs) {
        $("#songs").append("<p>" +songs+"</p>");
    });
    images_links.forEach(function(image) {
        $("#images").append("<p> <img src=" +image+" /></p>");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>"+artist+"</p>");
    });
    song_lengths.forEach(function(song){
        $("#lengths").append("<p>"+song+"</p>")
    });
    links.forEach(function(link){
        $("#links").append("<a href="+link+">Listen</a>")
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var music=$("#song").val();
    songs.push(music);
    var photos=$("#image").val();
    images_links.push(photos);
    var singer=$("#artist").val();
    artists.push(singer);
    var size=$("#length").val();
    song_lengths.push(size);
    var address=$("#link").val();
    links.push(address);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
