var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var InfoSchema = new Schema({
	description: String,
	firstName: String,
	middleName: String,
	surname: String,
	githubLink: String,
	profilePhoto: String,
	city: String,
	state: String,
	pets:[{
		name: String,
		type: String
	}]
});

var AlbumSchema = new Schema({
	albumOne:[{
		title: String,
		artist: String,
		release: String
	}],
	albumTwo:[{
		title: String,
		artist: String,
		release: String
	}],
	albumThree:[{
		title: String,
		artist: String,
		release: String
	}],
	albumFour:[{
		title: String,
		artist: String,
		release: String
	}],
	albumFive:[{
		title: String,
		artist: String,
		release: String
	}],
});


var Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
module.exports = Album;
