var app = angular.module("app", [ 'eAlert', 'ui.bootstrap', 'ngSanitize' ]);

app.controller('controller', function($scope, eAlert) {

	console.log(">>>controller");
	var a = eAlert.alert("test", function() {

	});

	console.log(a);
});

// https://embed.plnkr.co/plunk/XZOXbZ < modal範例
