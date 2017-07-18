(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			// compile: function () {
			// 	console.log('OrsStar compile', arguments);
			// 	return {
			// 		pre: function () {
			// 			console.log('OrsStar preLink', arguments);
			// 		},
			// 		post: function () {
			// 			console.log('OrsStar link', arguments);
			// 		}
			// 	};
			// },
			controller: ['$scope', function OrsStarCtrl($scope) {
				console.log('OrsStarCtrl', arguments);
			}],
		};
	});
})();