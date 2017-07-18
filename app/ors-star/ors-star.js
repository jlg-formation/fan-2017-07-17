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
			scope: {
				n: '=note'
			},
			controller: ['$scope', '$element', '$attrs', function OrsStarCtrl($scope, $element, $attrs) {
				console.log('OrsStarCtrl', arguments);
				$scope.$watch('n', function () {
					let html = '';
					let note = (+$scope.n) || 3;
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					for (let i = 0; i < note; i++) {
						html += '<img src="./ors-star/img/yellow_star.png" >';
					}
					for (let i = note; i < 5; i++) {
						html += '<img src="./ors-star/img/white_star.png" >';
					}
					$element.html(html);
				});

			}],
		};
	});
})();