angular.module('DealCtrl', []).controller('DealController', function($scope, $http, $routeParams) {

	console.log($routeParams.designer);

	var self = this;
	  self.all = [];
	  self.designer = $routeParams.designer || false;

	getDeals();
	 function getDeals(){
	   $http
	     .get('/api/deals')
	     .then(function(response){
	       self.all = response.data;
	       console.log(response.data);
	   });
	 }

	 // getDeal();
	 //  function getDeal(){
	 //    $http
	 //      .get('/api/deals')
	 //      .then(function(response){
	 //        self.all = response.data;
	 //        console.log(response.data);
	 //    });
	 //  }

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

