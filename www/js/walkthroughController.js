(function () {
   "use strict";

angular.module('ng-walkthrough-ionic-example')

.controller('WalkthroughController',
['$scope', '$log', 'WalkthroughService', 
    function ($scope, $log, WalkthroughService) {
    
	var step = function(walk_args) {
		$log.debug('updateWalk called with:', walk_args);
		
		$scope.mainCaption = walk_args.mainCaption;
		$scope.focusElementId = walk_args.focusElementId;
		$scope.isActive = true;
		$scope.walkIndex += 1;
	};
	
	$scope.nextWalk = function() {
		$log.debug('nextWalk called', $scope.walkIndex, $scope.duplicateClick);
		if(!$scope.duplicateClick) {
			if($scope.walkIndex < $scope.walk.length) {
				step($scope.walk[$scope.walkIndex]);
			} else {
				$log.debug('nextWalk DONE');
			}
		}
		$scope.duplicateClick = !$scope.duplicateClick;
	};
	
	$scope.$on('update_walk', function(event, args) {
		$scope.duplicateClick = false;
		$scope.walkIndex = 0;
		$scope.walk = args;
		$scope.nextWalk();
	});

}]);

}());
