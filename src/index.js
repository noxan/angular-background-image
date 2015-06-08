angular.module("backgroundImage", []);

angular.module("backgroundImage").directive("backgroundImage", [function () {
  return {
    link: function (scope, element, attrs) {
      attrs.$observe("backgroundImage", function (src) {
        element.css({
          "background-image": "url('" + src + "')"
        });
      });
    }
  };
}]);
