let roadApp = angular.module('RoadApp', ['ngRoute']);

roadApp.config(($routeProvider) => {
	$routeProvider
		.when('/ca-route1', {
			templateUrl: 'ca-route1.html',
			controller: 'CaRoute1Controller'
		})
		.when('/route66', {
			templateUrl: 'route66.html',
			controller: 'Route66Controller'
		})
		.otherwise('/');
});

roadApp.controller('CaRoute1Controller', function($scope){
	$scope.highwayName = "California State Route 1";
	$scope.highwayDescription = "U.S. Route 66 (US 66 or Route 66), also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System. US 66 was established on November 11, 1926, with road signs erected the following year. The highway, which became one of the most famous roads in the United States, originally ran from Chicago, Illinois, through Missouri, Kansas, Oklahoma, Texas, New Mexico, and Arizona before ending at Santa Monica, California, covering a total of 2,448 miles (3,940 km). It was recognized in popular culture by both the hit song \"(Get Your Kicks on) Route 66\" and the Route 66 television show in the 1960s.";
});

roadApp.controller('Route66Controller', function($scope){
	$scope.highwayName = "U.S. Route 66";
	$scope.highwayDescription = "State Route 1 (SR 1) is a major north-south state highway that runs along most of the Pacific coastline of the U.S. state of California. At a total of just over 655.8 miles (1,055.4 km), it is the longest state route in California. Highway 1 has several portions designated as either Pacific Coast Highway (PCH), Cabrillo Highway, Shoreline Highway, or Coast Highway. Its southern terminus is at Interstate 5 (I-5) near Dana Point in Orange County and its northern terminus is at U.S. Highway 101 (US 101) near Leggett in Mendocino County. Highway 1 also at times runs concurrently with US 101, most notably through a 54-mile (87 km) stretch in Ventura and Santa Barbara counties, and across the Golden Gate Bridge.";
});
