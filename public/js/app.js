angular.module('digApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'SongCtrl', 'SongService'])
	.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});
