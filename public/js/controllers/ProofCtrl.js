angular.module('ProofCtrl', []).controller('ProofController', function($scope, $http, $routeParams) {

var self = this;
	  self.designer = $routeParams.designer || false;
	  self.proofID = $routeParams.id;
	  self.proof = {};
	  self.response = {
	  };

	  console.log("revise " + self.response.revise);

	  getProof();
	  function getProof(){
	  	$http
	       .get('/api/proof/' + self.proofID)
	       .then(function(response){
	         self.proof = response.data;
	         console.log(response.data);
	     });
	    
	    }


	  $scope.requestRevision = function(){
	  	self.response.revise = 'yes';
	  	console.log(self.response.revise);
	  };

	  $scope.submitResponse = function() {
	  		self.response.changes = $scope.response.changes;
	  		self.proof.response = self.response;
	  		console.log(self.proof);
	  		$http
	        .put('/api/proofs/' + self.proofID, self.proof)
	        .then(function(response){
	        	console.log(response);
	      });
	     };

});