(function() {
    'use strict';

    angular.module('meetApp')
        .factory('twApiService', ['$http', '$q', 
            function ($http, $q ) {
            
                //api v2 not working ... fuck
                var baseurl = 'https://api.twitter.com/1.1/search/tweets.json?q=%40twitterapi';

              

            }

        ]);

})();