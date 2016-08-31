// // grab the mongoose module
// var mongoose = require('mongoose'),
// 	Schema = mongoose.Schema;


// var SongSchema = new Schema({
//   spotifyURL: String,
//   notes: Boolean
// });

// var Song = mongoose.model('Song', SongSchema);

// module.exports = Song;

var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Deal', {
    designer : {type : String, default: ''},
    client : {type : Object, default: {
    	fName: {type: String, default: ''},
    	lName: {type: String, default: ''}
    }},
    created: {type: Date, default: Date.now()},
    dealID: {type: Number, default: ''},
    pipeline: {type: String, default: ''}
});

var i = 1;