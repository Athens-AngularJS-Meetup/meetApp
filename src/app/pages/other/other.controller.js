(function() {
    'use strict';

    angular.module('meetApp')
    .controller('otherController', ['ytApiService',//dependencies,
        function(ytApiService) {

	        var other = this;
	        other.fetchVids = function(kw) {
	        	ytApiService.findByKeyword(kw).then(function(res){
	        		other.data = res;
	        	},
	        	function(err){
	        		//handle error
	        	});
	        }
	    }
    ]);

})();