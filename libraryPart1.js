var _data = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

const playlists = library.playlists;

const printPlaylist = (id) => {
  let playlistDetails = []
  let playlistName    = playlists[id].name;
  let numberOfTracks  = playlists[id].tracks.length
  let tracks          = playlists[id].tracks

  playlistDetails.push(`${id}: ${playlistName} - ${numberOfTracks} tracks`)

  for (track in library.tracks) {
    tracks.forEach((id) => {
      if (id === library.tracks[track].id) {
        playlistDetails.push(`${library.tracks[track].id}: ${library.tracks[track].name} by ${library.tracks[track].artist} (${library.tracks[track].album})`)
      }
    })
  }
  playlistDetails.forEach((value) => {
    console.log(value);
  })
}

const printPlaylists = () => {
  for (key in playlists) {
    let playlistName     = playlists[key].name;
    let tracksInPlaylist = playlists[key].tracks.length;
    console.log(`${key}: ${playlistName} - ${tracksInPlaylist} tracks`);
  }
};

const printTracks = () => {
  for (key in trackList) {
    let trackName = trackList[key].name
    let artist    = trackList[key].artist
    let album     = trackList[key].album
    console.log(`${key}: ${trackName} by ${artist} (${album})`)
  }
}

const addTrackToPlaylist = (trackId, playlistId) => {
  playlists[playlistId].tracks.push(trackId)
}

const uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

const addTrack = (name, artist, album) => {
  let id = uid()
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  }
}

const addPlaylist = (name) => {
  let id = uid();
  playlists[id] = {
    id: id,
    name: name,
    tracks: []
  }
}


const printSearchResults = function(query) {}
