import 'angular-ui-router';
const app = angular.module('ors-route', ['ui.router']);

import homeHtml from './tmpl/home.html';
import productsHtml from './tmpl/products.html';
import servicesHtml from './tmpl/services.html';
import contactHtml from './tmpl/contact.html';

app.config(function($stateProvider, $locationProvider) {
	'ngInject';
	$locationProvider
			.html5Mode(true);

	$stateProvider.state( {
		name: 'home',
		url: '/',
		template: homeHtml
	});
	$stateProvider.state({
		name: 'products',
		url: '/products',
		template: productsHtml
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
});
