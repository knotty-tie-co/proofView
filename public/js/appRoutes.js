angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/new-song', {
			templateUrl: 'views/new-song.html',
			controller: 'SongController'
		});

	$locationProvider.html5Mode(true);

}]);