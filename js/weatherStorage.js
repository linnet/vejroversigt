weather.factory('weatherStorage', function(){
    var STORAGE_ID = "weatherZipcodes";
    return {
        save: function(zipcodes){
            localStorage.setItem(STORAGE_ID, JSON.stringify(zipcodes));
        },
        load: function() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        }
    };
});