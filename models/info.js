var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PetSchema = new Schema({
	name: String, 
	type: String
});

var InfoSchema = new Schema({
	description: String,
	firstName: String,
	middleName: String,
	surname: String,
	githubLink: String,
	profilePhoto: String,
	city: String,
	state: String,
	pets:[PetSchema]
});

var Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
