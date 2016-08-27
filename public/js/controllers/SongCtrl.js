angular.module('SongCtrl', []).controller('SongController', function($scope, $http) {

	var self = this;
	  self.all = [];
	  self.addSong = addSong;
	  self.newSong = {};
	  self.getSongs = getSongs;

	getSongs();
	 function getSongs(){
	   $http
	     .get('/api/songs')
	     .then(function(response){
	       self.all = response.data;
	       console.log(response.data);
	   });
	 }

	function addSong(){
	    $http
	      .post('/api/songs', self.newSong)
	      .then(function(response){
	      	console.log(response);
	        self.all.push(response.data.song);
	    });
	    self.newSong = {};
	  }

});