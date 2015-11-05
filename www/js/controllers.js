
angular.module('ng-walkthrough-ionic-example')
.controller('MainCtrl', function ($scope, $log, WalkthroughService) {
	WalkthroughService.updateWalk();

	$scope.button1 = function () {
		$log.log('button1 called');
	};
	
	$scope.button2 = function () {
		$log.log('button2 called');
	};
});
