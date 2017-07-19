import 'angular/angular-csp.css';
import './style.scss';
import 'angular';
import './ors-star/ors-star.js';
import './ors-route/ors-route.js';
import './ors-log.js';
const app = angular.module('main', ['ors-star', 'ors-route', 'ors-log']);

app.run(function($rootScope) {
	$rootScope.name = 'Mohamed-DJENOUAL';
});
