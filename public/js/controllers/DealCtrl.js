angular.module('DealCtrl', []).controller('DealController', function($scope, $http) {

	var self = this;
	  self.all = [];
	  self.addSong = addSong;
	  self.newSong = {};
	  self.getSongs = getSongs;

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