function WeatherCtrl($scope) {
    $scope.zipcodes = [ 2700 ];

    $scope.addZipcode = function(){
        $scope.zipcodes.push($scope.zipcode);
    };

    $scope.removeZipcode = function(zipcode){
        var index = $scope.zipcodes.indexOf(zipcode);
        $scope.zipcodes.splice(index, 1);
    };
}