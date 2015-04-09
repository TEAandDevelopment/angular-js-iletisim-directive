var myApp = angular.module('myApp', []);

// controllers
myApp.controller('myController', ['$scope',
    function ($scope) {

        $scope.scopeNesnesi = {
            tamIsim: "Talha Emin AYDEMİR",
            ePosta: "talhaeminaydemir@gmail.com",
            website: "https://www.facebook.com/teaprogrammer",
            dogumTarihi: "10-07-1996"
        };

    }
]);

myApp.directive("iletisimBilgilerim", function () {
    return {
        restrict: "A",
        templateUrl: "views/partial/contact.html"
    };
});

