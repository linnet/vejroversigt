weather.controller('WeatherCtrl', function WeatherCtrl($scope, weatherStorage) {
    $scope.zipcodes = weatherStorage.load();

    $scope.addZipcode = function(){
        $scope.zipcodes.push($scope.zipcode);
        $scope.zipcode = '';
    };

    $scope.removeZipcode = function(zipcode){
        var index = $scope.zipcodes.indexOf(zipcode);
        $scope.zipcodes.splice(index, 1);
    };

    $scope.$watch('zipcodes', function(){
        weatherStorage.save($scope.zipcodes);
    }, true);
});
