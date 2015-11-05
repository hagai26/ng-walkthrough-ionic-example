
angular.module('ng-walkthrough-ionic-example', ['ionic', 'ng-walkthrough'])

.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		});

	$urlRouterProvider.otherwise('/main');
});
