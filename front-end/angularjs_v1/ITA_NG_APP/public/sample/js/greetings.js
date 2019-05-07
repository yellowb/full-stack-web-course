var app = angular.module('greetings', []);

app.directive("welcome", function() {
    return {
        restrict: "E",
        controller: function($scope) {
            $scope.words = [];

            this.sayHello = function () {
                $scope.words.push("hello");
            };
            this.sayHowdy = function () {
                $scope.words.push("howdy");
            };
            this.sayHi = function () {
                $scope.words.push("hi");
            }
        },
        link: function(scope, element) {
            element.bind("mouseenter", function() {
                console.log(scope.words);
            })
        }
    }
});

app.directive("hello", function() {
    return {
        require: "welcome",
        link: function(scope, element, attrs, WelcomeCtrl) {
            WelcomeCtrl.sayHello();
        }
    }
});

app.directive("howdy", function() {
    return {
        require: "welcome",
        link: function(scope, element, attrs, WelcomeCtrl) {
            WelcomeCtrl.sayHowdy();
        }
    }
});

app.directive("hi", function() {
    return {
        require: "welcome",
        link: function(scope, element, attrs, WelcomeCtrl) {
            WelcomeCtrl.sayHi();
        }
    }
});