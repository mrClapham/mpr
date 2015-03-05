App.directive('imageonload', function() {
    return {
        restrict: 'A',
        transclude:"true",
        link: function(scope, element, attrs) {
            element.addClass('fadedOut');
            element.bind('load', function() {
                element.removeClass('fadedOut');
                element.addClass('fadedIn');
            });
        }
    };
});