(function () {
	'use strict';

	var app = angular.module('main', ['ors-star']);

	app.run(function ($rootScope) {
		$rootScope.name = 'Jacques-Olivier';
	});
})();
