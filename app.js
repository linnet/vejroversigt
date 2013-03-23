function WeatherCtrl($scope) {
    $scope.zipcodes = [ 1000, 2700, 2650 ];

    $scope.addZipcode = function(){
        $scope.zipcodes.push($scope.zipcode);
    }

    $scope.removeZipcode = function(zipcode){
        var index = $scope.zipcodes.indexOf(zipcode);
        $scope.zipcodes.splice(index, 1);
    }
}