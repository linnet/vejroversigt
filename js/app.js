function WeatherCtrl($scope) {
    $scope.zipcodes = loadZipcodes();

    $scope.addZipcode = function(){
        $scope.zipcodes.push($scope.zipcode);
        $scope.zipcode = '';
    };

    $scope.removeZipcode = function(zipcode){
        var index = $scope.zipcodes.indexOf(zipcode);
        $scope.zipcodes.splice(index, 1);
    };

    $scope.$watch('zipcodes', function(){
        saveZipcodes();
    }, true);

    function saveZipcodes(){
        localStorage["ZipCodes"] = $scope.zipcodes;
    }
    function loadZipcodes() {
        var zipCodes = localStorage["ZipCodes"];
        if (zipCodes === undefined) {
            return [];
        }
        return zipCodes.split(",");
    }

}