(function () {
   "use strict";

angular.module('ng-walkthrough-ionic-example')
.factory('WalkthroughData', [
          function () {
    var obj = {};
    
    obj.data = [
        {
        	focusElementId: 'step1',
        	mainCaption: 'this is step 1'
        },
        {
        	focusElementId: 'step2',
        	mainCaption: 'and here is step 2'
        },
		{
        	focusElementId: 'step3',
        	mainCaption: 'and here is step 3'
        },
		{
        	focusElementId: 'step4',
        	mainCaption: 'and here is step 4'
        }
	    ];
    
    return obj;
}]);

}());
