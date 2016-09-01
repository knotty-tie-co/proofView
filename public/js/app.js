angular.module('proofViewApp', ['ngRoute', 'appRoutes', 'MainCtrl', 'DealCtrl', 'ProofCtrl', 'DealService'])
	.config(function ($sceProvider) {
    $sceProvider.enabled(false);
});

	$(document).ready(function(){
     $('#addProof').click(function(){
        $('#modaldiv').modal('show');    
     });
});
