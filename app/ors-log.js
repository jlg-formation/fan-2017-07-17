const app = angular.module('ors-log', []);

app.config(['$provide', function($provide) {

	$provide.decorator('$log', ['$delegate', function($delegate) {
		// Save the original $log.debug()
		// var debugFn = $delegate.debug;

		$delegate.debug = console.log.bind(window.console);
		$delegate.error = console.error.bind(window.console);

		return $delegate;
	}]);
}]);
