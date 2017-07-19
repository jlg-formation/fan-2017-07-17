const app = angular.module('ors-star', []);

app.component('orsStar', {
	bindings: {
		n: '<?note'
	},
	controller: ['$scope', '$element', '$attrs', '$compile',
		function OrsStarCtrl($scope, $element, $attrs, $compile) {
			const ctrl = this;
			console.log('OrsStarCtrl', arguments);
			ctrl.update = function(newNote) {
				console.log('scopeUpdate xxx', arguments);
				ctrl.n = newNote;
			};

			$scope.$watch('$ctrl.n', function() {
				let html = '';
				let note = (+ctrl.n) || 0;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				for (let i = 0; i < note; i++) {
					html += '<img ng-click="$ctrl.update(' + (i) + ')" src="./ors-star/img/yellow_star.png" >';
				}
				for (let i = note; i < 5; i++) {
					html += `<img 
						ng-click="$ctrl.update(${i + 1})" 
						src="./ors-star/img/white_star.png" >`;
				}
				$element.html(html);
				$compile($element.contents())($scope);
			});

		}
	],
});
