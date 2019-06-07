const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

const Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.averageRating = averageRating();


  function averageRating() {
    let totalRating = 0;
    for (let track in this.tracks) {
      totalRating += track.rating
    }
    return totalRating;
  }
}

const Track = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist)
}


Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track)
}








const turnersLibrary = new Library('My Library', 'Turner');

const playlist1 = new Playlist('LoFi Hip Hop to Relax/Study to');


const track1 = new Track('Code Monkey', 3, 180)
const track2 = new Track('Model View Controller', 5, 300)

playlist1.addTrack(track1);
playlist1.addTrack(track2);

turnersLibrary.addPlaylist(playlist1);
// const playlist1 = new Playlist('Friday Bangers');

console.log(turnersLibrary.playlists[0].averageRating);





