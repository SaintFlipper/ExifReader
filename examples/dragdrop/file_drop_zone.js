angular.module('dropzoneDirective', [])
.directive('dropZone', ['$window', '$log', function($window, $log) {

    function link(scope, element, attrs) {

        // Attach drag events
        element.on('dragenter', function(e) {
            $(e.target).addClass ('file-drop-activate');
            e.preventDefault();
            e.stopPropagation();
            return (false);
        });

        element.on('dragover', function(e) {
            $(e.target).addClass ('file-drop-activate');
            e.preventDefault();
            e.stopPropagation();
            return (false);
        });

        element.on('dragleave', function(e) {
            $(e.target).removeClass ('file-drop-activate');
            e.preventDefault();
            e.stopPropagation();
            return (false);
        });

        element.on('drop', function(e) {
            $(e.target).removeClass ('file-drop-activate');
            e.preventDefault();
            e.stopPropagation();

            // Pass the dropped FileList to the supplied handler
            var files = e.originalEvent.dataTransfer.files;
            if (scope.droppedFileListHandler)
                scope.droppedFileListHandler (files);

            return (false);
        });
    }

    var directiveObj = {
        scope: {
            droppedFileListHandler: '='
        },
        restrict: 'A',
        link: link
    };

    return directiveObj;
}])
.directive('noDrop', ['$window', '$log', function($window, $log) {

    // Directive preventDrop / "prevent-drop"
	// Blocks dropping onto a marked element.

    function link(scope, element, attrs) {

        element.on('dragstart', function(e) {
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = "none";
            return (false);
        });

        element.on('dragenter', function(e) {
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = "none";
            return (false);
        });

        element.on('dragover', function(e) {
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = "none";
            return (false);
        });

        element.on('dragleave', function(e) {
            e.preventDefault();
            return (false);
        });

        element.on('drop', function(e) {
            e.preventDefault();
            return (false);
        });
    }

    var directiveObj = {
        restrict: 'A',
        link: link
    };

    return directiveObj;
}]);

