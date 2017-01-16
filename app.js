var myApp = angular.module("myApp", ['ngMessages']);

myApp.controller("HeaderCtrl", ['$scope', '$log', function ($scope, $log) {

	$log.log("That's a really creative title and tagline..."); /*This is here just to see that '$log' is there to log in to the console and is for debugging*/
	$log.info("Each of these instruments on this list redirect you to different retailers.");
	$log.warn("There are only a limited amount of guitars left, so take advantage by looking through this list today!");
	$log.error("Just kidding, there's no error! Haha! Don't be alarmed, nerd.");
	$log.debug("Nothing to debug. This is all good!");

	$scope.appDetails = {
		title: "JamLog",
		tagline: "Take a look at our Fancy Instruments in Stock!"
	}
}])

myApp.controller("GuitarCtrl", ['$scope', '$http', function($scope, $http) {
	var url = "data.json";

    $http.get(url).then(function(response) {
    	$scope.guitars = response.data.guitars;
    }, function(error) {
    	alert("JSON data failed to load");
    }

    );
}])

//myApp.controller("MinifierCtrl", function(a, b){b.info(a)});

	/*

	'response.data' refers to the ENTIRE JSON document. If you want to import from a specific class, you have to add '.classname' at the end of it,
	which is why you write 'response.data.guitars' at the end.

   */