var mongoose = require('mongoose');
	Schema = mongoose.Schema;
	deal = require('./Deal');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Proof', {
    created: {type: Date, default: Date.now},
    deal: {type: Schema.Types.ObjectId, ref: 'Deal'},
    image: {type: String, default: ''},
    response: {type: Object},
	}
);