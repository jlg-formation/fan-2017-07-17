import 'angular/angular-csp.css';
import './style.scss';
import 'angular';
import './ors-star/ors-star.js';
const app = angular.module('main', ['ors-star']);

app.run(function($rootScope) {
	$rootScope.name = 'Mohamed-Abidar';
});
