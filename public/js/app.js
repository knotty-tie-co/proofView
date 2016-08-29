angular.module('proofViewApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'DealCtrl', 'DealService'])
	.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});
