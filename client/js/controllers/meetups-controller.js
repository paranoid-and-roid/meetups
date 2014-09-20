app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource) {
	
	var Meetup = $resource('/api/meetups');
	
	$scope.meetups = [{name: "Horror Society"}];
	
	$scope.createMeetup = function() {
		
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result) {
			$scope.meetups.push(result);
		});
		
		//$scope.meetupName = "";
	};
}]);
