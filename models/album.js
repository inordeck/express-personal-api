var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var AlbumSchema = new Schema({
	album: Number,
	title: String,
	artist: String,
	release: String
});


var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;