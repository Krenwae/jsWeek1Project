
var spotifyKey = "93775f52de654485b8dab1a3f19bc469"

$(function(){

  $("#wordSubmit").click(function(){

    var word = $("#word").val()

    console.log(word)

    searchWord(word)

  })

  function searchWord(word){

    var params = {
      url: "https://api.spotify.com/v1/search?q=" + word + "&type=track&limit=5"
      }

    $.ajax(params).done(function(data){
      console.log(data)

      var songs = []
      var artist = []

      for(i=0; i<data.tracks.items.length; i++){
        songs[i] = data.tracks.items[i].name
        artist[i] = data.tracks.items[i].artists[0].name
      }

      makePlaylist(songs, artist)
    })

  }

  function makePlaylist(songs, artist) {

    var html = "<table><tr id='tableHead'><td>Song</td><td>Artist</td></tr>";

    for (i=0; i<songs.length; i++){
      html += "<tr><td>" + songs[i] + "</td><td>" + artist[i] + "</td></tr>";
    }

    html += "</table>";
    $("#playlist").html(html);
  }

})
