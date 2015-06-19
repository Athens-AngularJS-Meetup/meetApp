(function() {
    'use strict';

    angular.module('meetApp')
        .factory('ytApiService', ['$http', '$q', 
            function ($http, $q ) {
            
                //api v2 not working ... fuck
                var baseurl = 'http://gdata.youtube.com/feeds/api';

                var findByKeyword = function(keyword){
                    var deferred = $q.defer();
                    var url = baseurl + '/videos?q=' + keyword + '&alt=json';
                    $http.get(url).success(deferred.resolve).error(deferred.reject);
                    return deferred.promise;
                }


                return {
                    findByKeyword: findByKeyword
                };

            }

        ]);

})();