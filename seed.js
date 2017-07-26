// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var my_info = {
	"description": "the basic info about me",
	"firstName": "Ian",
	"middleName": "Taylor",
	"surname": "Nordeck",
	"githubLink": "https://github.com/inordeck",
	"profilePhoto": "https://avatars3.githubusercontent.com/u/29262228?v=4&s=460",
	"city": "Centennial",
	"state": "Colorado",
	"pets": [
		{ "name": "Leopold", "type": "English Bulldog"},
		{ "name": "Murphy", "type": "English Bulldog" },
		{ "name": "Gus", "type": "Cat" },
		{ "name": "Rex", "type": "Bearded Dragon" },
		{ "name": "Pengi", "type": "Hermit Crab" },
		{ "name": "Sharky", "type": "Hermit Crab" },
		{ "name": "Master Claw", "type": "Hermit Crab" },
		{ "name": "Coconut", "type": "Beta Fish" },
		{ "name": "Violet", "type": "Beta Fish" }
	]
};

var my_albums = {
	"albumOne": [
		{ "title": "M", "artist": "N", "release": "year" },
	],

	"albumTwo": [
		{ "title": "M", "artist": "N", "release": "year" },
	],
	"albumThree": [
		{ "title": "M", "artist": "N", "release": "year" },
	],

	"albumFour": [
		{ "title": "M", "artist": "N", "release": "year" },
	],
	"albumFive": [
		{ "title": "M", "artist": "N", "release": "year" },
	]
};



db.my_info.create(my_info, function(err, info){
  if (err){
    return console.log("Error:", err);
  }

  console.log("created basic info about me", info._id);
  process.exit(); // we're all done! Exit the program.
});
