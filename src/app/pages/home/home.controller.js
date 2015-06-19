(function() {
    'use strict';

    angular.module('meetApp')
    .controller('homeController', ['meetupApiService',//dependencies,
        function(meetupApiService) {

	        var home = this;
	        //home.whatever makes a variable available in view
	        home.fetchGroups = function(country) {
	        	meetupApiService.findGroups(country).then(function(res){
	        		home.data = res;
	        	},
	        	function(err){
	        		//handle error
	        	});
	        }
	    }
    ]);

})();