App.controller('AppController',['$scope','$http', 'AppService', function($scope, $http, AppService){
    $scope.testVal = "Test value..."
    AppService.getProducts().then(function(resp){
         console.log('THE DATA IS ', $scope.data = resp.data)
    })
}]);