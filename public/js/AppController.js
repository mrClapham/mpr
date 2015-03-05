App.controller('AppController',['$scope','$http', 'AppService', function($scope, $http, AppService){
    $scope.productArray = []
    $scope.multiplier = 0;
    $scope.getProducts = function(){
        var ret = _.cloneDeep($scope.productArray);
        for(var i =0; i<$scope.multiplier; i++){
           ret = ret.concat( _.cloneDeep($scope.productArray) );
        }
        return ret
    }
    AppService.getProducts().then(function(resp){
        $scope.productArray = resp.data;
        $scope.multiplier = 0;
        $scope.data = $scope.getProducts()
    })
    $scope.main = document.getElementById('main');

    window.onscroll = function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var buffer = window.innerHeight;

        if( ($scope.main.clientHeight - scrollTop) < buffer*2 ){
            $scope.multiplier += 1;
            $scope.data = $scope.getProducts();
            $scope.$apply();
        }
    }
}]);