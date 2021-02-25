var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AthleteProfileSchema = new Schema({
    first_name: {type: String, required: [true, "First name required"], trim: true, maxLength: 100},
    last_name: {type: String, required: [true, "Last name required"], trim: true, maxLength: 100},
    date_of_birth: {type: String},
    location: {type: String},
    team: {type: String},
    gender: {type: String},
    sports: [{type: String}],
    about: {type: String},
    interests: {type: String},
    profile_image: {type: String}
});

AthleteProfileSchema
    .virtual('name')
    .get(function () {
        return this.first_name + " " + this.last_name;
    });

AthleteProfileSchema
    .virtual('url')
    .get(function () {
        return '/athleteprofile/' + this._id;
    });

module.exports = mongoose.model('AthleteProfile', AthleteProfileSchema );
