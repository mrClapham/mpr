App.factory('AppService', function($resource, $q){
    var _prodResource = $resource('/api/products/',
        {
            get: { method: "JSON" }
        }
    )

    return{
        getProducts:function(){
            var q = $q.defer();
            _prodResource.get( function(resp) {
                q.resolve(resp);
            }, function(err) {
                console.log("ERROR ", err)
                q.reject(err);
            })
            return q.promise;
        }
    }

})