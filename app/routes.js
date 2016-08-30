var Deal = require('./models/deal.js');
var Proof = require('./models/proof.js');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

		//DEALS API ------------------------------------------------------------
		    // get all deals
		    app.get('/api/deals', function(req, res) {
		        // use mongoose to get all songs in the database
		        Deal.find(function(err, deals) {
		            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		            if (err)
		                res.send(err);
		            res.json(deals); // return all songs in JSON format
		        });
		    });

		    // create song and send back all songs after creation
		    app.post('/api/deals', function(req, res) {

		        // create a songs, information comes from AJAX request from Angular
		        Deal.create({
		            designer : req.body.designer,
		            client : {
		            	fName : req.body.fName,
		            	lName: req.body.lName},
		            dealID: req.body.dealID,
		            pipeline: req.body.pipeline,
		            created: req.body.created
		        }, function(err, todo) {
		            if (err)
		                res.send(err);

		            // get and return all the songs after you create another
		            Deal.find(function(err, deals) {
		                if (err)
		                    res.send(err);
		                res.json(deals);
		            });
		        });

		    });

		    //PROOFS API ------------------------------------------------------------
		        // get all deals
		        app.get('/api/proofs', function(req, res) {
		            // use mongoose to get all songs in the database
		            Proof.find(function(err, proofs) {
		                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
		                if (err)
		                    res.send(err);
		                res.json(proofs); // return all songs in JSON format
		            });
		        });

		        // create song and send back all songs after creation
		        app.post('/api/proofs', function(req, res) {

		            // create a songs, information comes from AJAX request from Angular
		            Proof.create({
		                image: req.body.image,
		                deal: req.body.deal
		            }, function(err, todo) {
		                if (err)
		                    res.send(err);

		                // get and return all the songs after you create another
		                Proof.find(function(err, proofs) {
		                    if (err)
		                        res.send(err);
		                    res.json(proofs);
		                });
		            });

		        });

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};