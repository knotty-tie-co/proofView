angular.module('proofViewApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'DealCtrl', 'DealService'])
	.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

	$(document).ready(function(){
     $('#addProof').click(function(){
        $('#modaldiv').modal('show');    
     });
});
