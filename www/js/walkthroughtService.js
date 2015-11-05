(function () {
   "use strict";

angular.module('ng-walkthrough-ionic-example')
.factory('WalkthroughService', [
        '$rootScope', 'WalkthroughData',
          function ($rootScope, WalkthroughData) {
    var obj = {};
    
    obj.updateWalk = function() {
    	$rootScope.$broadcast('update_walk', WalkthroughData.data);
    };
    
    return obj;
}]);

}());
