angular.module('ProofCtrl', []).controller('ProofController', function($scope, $http, $routeParams) {

var self = this;
	  self.designer = $routeParams.designer || false;
	  self.proofID = $routeParams.id;
	  self.proof = {};

	  getProof();
	  function getProof(){
	  	$http
	       .get('/api/proof/' + self.proofID)
	       .then(function(response){
	         self.proof = response.data;
	         console.log(response.data);
	     });
	    
	    }

	getDeals();
	 function getDeals(){
	   $http
	     .get('/api/deals')
	     .then(function(response){
	       self.all = response.data;
	       console.log(response.data);
	   });
	 }

	function addDeal(){
	    $http
	      .post('/api/deals', self.newDeal)
	      .then(function(response){
	      	console.log(response);
	        self.all.push(response.data.deal);
	    });
	    self.newDeal = {};
	  }

});