(function() {
    'use strict';

    angular.module('meetApp')
        .factory('meetupApiService', ['$http', '$q', 
            function ($http, $q ) {
                var baseUrl = 'https://api.meetup.com';
                var apikey = ''; //this is secret. Removed :/

                //  warning:meetup api needs cors & api key
                // var findGroups = function (country) {
                //     var deferred = $q.defer();
                //     var url = baseUrl + '/find/groups?photo-host=public&page=20&country=' + country + '&sig_id=183443479&sig=' + apikey;
                //     $http.get(url).success(deferred.resolve).error(deferred.reject);
                //     return deferred.promise;
                // };

                var findGroups = function(country){
                    var deferred = $q.defer();
                    var url = 'app/common/services/meetApp.sampleresponse.json'
                    $http.get(url).success(deferred.resolve).error(deferred.reject);
                    return deferred.promise;
                }


                return {
                    findGroups: findGroups
                };
        }]);

})();