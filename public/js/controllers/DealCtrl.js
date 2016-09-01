angular.module('DealCtrl', []).controller('DealController', function($scope, $http, $routeParams) {


	var self = this;
	  self.all = [];
	  self.designer = $routeParams.designer || false;
	  self.dealID = $routeParams.id;
	  self.deal = {};
	  self.proofs = [];
	  
	  $scope.addProof = {
	  	"image" : "",
	  	"deal" : self.dealID
	  };

	  


	$scope.saveData = function() {
		console.log($scope.addProof);
			$http
	      .post('/api/proofs', $scope.addProof)
	      .then(function(response){
	      	console.log(response);
	        self.proofs.push(response.data.reverse());
	    });
	   };

	  getDeal();
	  function getDeal(){
	  	$http
	       .get('/api/deal/' + self.dealID)
	       .then(function(response){
	         self.deal = response.data;
	     });
	    $http
	    	.get('/api/proof-by-deal/' + self.dealID)
	    	.then(function(response){
	    		self.proofs = response.data.reverse();
	    		console.log(response.data);
	    });

	  }
	  console.log(self.deal);
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

