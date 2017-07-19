import 'angular-ui-router';
const app = angular.module('ors-route', ['ui.router']);

import homeHtml from './tmpl/home.html';
import productsHtml from './tmpl/products.html';
import servicesHtml from './tmpl/services.html';
import contactHtml from './tmpl/contact.html';

function ProductCtrl($http, $log, $q) {
	'ngInject';
	this.start = function() {
		$log.debug('start');
		$http.get('../ws/s1').then((response) => {
			$log.debug('s1', response);
			return $q.all([
				$http.get('../ws/s2').then((response) => {
					$log.debug('s2', response);
					return $http.get('../ws/s5');
				}),
				$http.get('../ws/s3'),
				$http.get('../ws/s4'),
			]);
		}).then((responses) => {
			$log.debug('s5,s3,s4', responses);
			return $http.get('../ws/s6');
		}).then((response) => {
			$log.debug('s6', response);
		}).catch((error) => {
			$log.error('error', error);
		});
	};

}

app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	'ngInject';
	$locationProvider
		.html5Mode(true);

	$stateProvider.state({
		name: 'home',
		url: '/',
		template: homeHtml
	});
	$stateProvider.state({
		name: 'products',
		url: '/products',
		template: productsHtml,
		controller: ProductCtrl,
		controllerAs: '$ctrl'
	});
	$stateProvider.state({
		name: 'services',
		url: '/services',
		template: servicesHtml
	});
	$stateProvider.state({
		name: 'contact',
		url: '/contact',
		template: contactHtml
	});
	$urlRouterProvider.otherwise('/');
});
