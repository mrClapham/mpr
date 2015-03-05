App.controller('AppController',['$scope','$http', 'AppService', function($scope, $http, AppService){
    $scope.testVal = "Test value..."
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
         console.log('THE DATA IS ', $scope.data )
         console.log('$scope.productArray ', $scope.productArray )
    })
    $scope.main = document.getElementById('main');

    window.onscroll = function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var buffer = window.innerHeight;
//        console.log('scrollTop ', scrollTop);
//        console.log("pane height ", $scope.main.clientHeight);
//        console.log("window height ",window.innerHeight);
//      console.log($scope.main.clientHeight - scrollTop);
        if(($scope.main.clientHeight - scrollTop)<buffer*2){
            $scope.multiplier += 1;
            $scope.data = $scope.getProducts();
            console.log("Buffer hit ",$scope.data.length)
            $scope.$apply();
        }
    }


}]);