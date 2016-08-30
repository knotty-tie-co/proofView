	angular.module('MainCtrl', []).controller('MainController', function($scope, $routeParams) {

		var self = this;

		self.designer = $routeParams.designer || false ;
});