angular.module('meetApp')
	.config(['$interpolateProvider', '$stateProvider', '$urlRouterProvider','$httpProvider',
		function($interpolateProvider, $stateProvider, $urlRouterProvider,$httpProvider, CSRF_TOKEN){

		$urlRouterProvider.otherwise("/");
		$stateProvider
		    .state('home', {
		    	url: "/",
		    	templateUrl: "app/pages/home/home.html"
		    })
		    .state('other', { 
		    	url: '/other', 
		    	templateUrl: 'app/pages/other/other.html'
		    })
			;
	}]);
