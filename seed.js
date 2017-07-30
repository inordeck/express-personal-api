// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var my_pets = [
		{ name: "Leopold", type: "English Bulldog"},
		{ name: "Murphy", type: "English Bulldog" },
		{ name: "Gus", type: "Cat" },
		{ name: "Rex", type: "Bearded Dragon" },
		{ name: "Pengi", type: "Hermit Crab" },
		{ name: "Sharky", type: "Hermit Crab" },
		{ name: "Master Claw", type: "Hermit Crab" },
		{ name: "Coconut", type: "Beta Fish" },
		{ name: "Violet", type: "Beta Fish" }
	];

var my_info = {
	description: "the basic info about me",
	firstName: "Ian",
	middleName: "Taylor",
	surname: "Nordeck",
	githubLink: "https://github.com/inordeck",
	profilePhoto: "https://avatars3.githubusercontent.com/u/29262228?v=4&s=460",
	city: "Centennial",
	state: "Colorado",
	pets: my_pets
};

var my_albums = [
		{ album: 1, title: "Plastic Surgery Disasters", artist: "Dead Kennedys", release: 1982, format: "cassette" },
		{ album: 2, title: "Nothing's Shocking", artist: "Jane's Addiction", release: 1988, format: "cassette" },
		{ album: 3, title: "Business as Usual", artist: "Men at Work", release: 1982, format: "vinyl" },
		{ album: 4, title: "Breakfast in America", artist: "Supertramp", release: 1979, format: "vinyl" },
		{ album: 5, title: "Land of Rape and Honey", artist: "Ministry", release: 1988, format: "found dubbed cassette" },
		{ album: 6, title: "Rabies", artist: "Skinny Puppy", release: 1989, format: "found dubbed cassette" },
		{ album: 7, title: "Undertow", artist: "Tool", release: 1993, format:"cd" },
		{ album: 8, title: "Suicidal Tendencies", artist: "Suciidal Tendencies", release: 1983, format: "dubbed cassette" },
		{ album: 9, title: "Mother's Milk", artist: "Red Hot Chili Peppers", release: 1989, format: "cassette" },
		{ album: 10, title: "Unknown Road", artist: "Pennywise", release: 1993, format: "cd" },
		{ album: 11, title: "Legend", artist: "Bob Marley", release: 1984, format: "cd" },
		{ album: 12, title: "Grand Fury", artist: "The Bellrays", release: 2000, format: "burned cd" },
		{ album: 13, title: "Changes in Attitudes, Changes in Latitudes", artist: "Jimmy Buffet", release: 1977, format: "vinyl" },
		{ album: 14, title: "Brothers in Arms", artist: "Dire Straits", release: 1985, format: "cd" },
		{ album: 15, title: "American Beauty", artist: "Grateful Dead", release: 1970, format: "vinyl" },
		{ album: 16, title: "Jaws", artist: "Soundtrack", release: 1975, format: "vinyl" },
		{ album: 17, title: "Dirty Deeds Done Dirt Cheap", artist: "AC/DC", release: 1976, format: "vinyl" },
		{ album: 18, title: "1984", artist: "Van Halen", release: 1984, format: "cassette" },
		{ album: 19, title: "II", artist: "Led Zeppelin", release: 1969, format: "digital" },
		{ album: 20, title: "Revolver", artist: "The Beatles", release: 1966, format: "digital" },
		{ album: 21, title: "Now, There Was a Song", artist: "Johnny Cash", release: 1960, format: "digital" },
		{ album: 22, title: "Master of Puppets", artist: "Metallica", release: 1986, format: "dubbed cassette" },
		{ album: 23, title: "Wish You Were Here", artist: "Pink Floyd", release: 1975, format: "cd" },
		{ album: 24, title: "Power in Numbers", artist: "Jurassic 5", release: 2002, format: "digital" },
		{ album: 25, title: "Cowboys from Hell", artist: "Pantera", release: 1990, format: "cd" },
	];

// remove all records that match {} -- which means remove ALL records
db.Info.remove({}, function(err, info){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all info');

    // create new records based on the array info
    db.Info.create(my_info, function(err, info){
      if (err) { return console.log('err', err); }
      console.log("created", info, "info");
    });
  }
});


db.Album.remove({}, function(err, albums){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all albums');

    // create new records based on the array album
    db.Album.create(my_albums, function(err, albums){
      if (err) { return console.log('err', err); }
      console.log("created", albums, "albums");
      process.exit();
    });
  }
});