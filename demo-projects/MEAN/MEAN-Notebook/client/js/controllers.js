noteBookApp.controller('noteBookCtrl', function ($rootScope, $scope, noteBookFactory) {

    $scope.notes = [];
    $scope.allNotes = [];

    $scope.isEditable = [];

    $scope.searchInput = '';

    // get all notes on Load
    noteBookFactory.getNotes().then(function (data) {
        $scope.notes = data.data;
        $scope.allNotes = _.clone(data.data);
    });

    // Save a note to the server
    $scope.save = function ($event) {
        if ($event.which == 13 && $scope.noteInput) {

            noteBookFactory.saveNote({
                "content": $scope.noteInput
            }).then(function (data) {
                $scope.allNotes.push(data.data);
                $scope.notes.push(data.data);
            });
            $scope.noteInput = '';
        }
    };

    // Update the note
    $scope.edit = function ($event, i) {
        if ($event.which == 13 && $event.target.value.trim()) {
            var _t = $scope.notes[i];
            noteBookFactory.updateNote({
                "_id": _t._id,
                "content": $event.target.value.trim()
            }).then(function (data) {
                if (data.data.content) {
                    // refresh the view
                    _t.content = $event.target.value.trim();
                    _t.lastUpdateTime = data.data.lastUpdateTime;
                    $scope.isEditable[i] = false;

                    // also update the full list
                    for(var index in $scope.allNotes) {
                        if($scope.allNotes[index]._id === _t._id) {
                            $scope.allNotes[index].content = $event.target.value.trim();
                            $scope.allNotes[index].lastUpdateTime = data.data.lastUpdateTime;
                        }
                    }
                } else {
                    alert('Oops something went wrong!');
                }
            });
        }
    };

    // Delete a note
    $scope.delete = function (i) {
        noteBookFactory.deleteNote($scope.notes[i]._id).then(function (data) {
            if (data.data) {
                _.remove($scope.allNotes, function(note) {
                    return note._id === $scope.notes[i]._id;
                });
                _.remove($scope.notes, function(note) {
                    return note._id === $scope.notes[i]._id;
                });
            }
        });
    };

    // Search
    $scope.search = function () {
        if (!_.isEmpty($scope.searchInput) && $scope.notes.length > 0) {
            // Filter those notes which can not match search word.
            $scope.notes = [];
            for(var index in $scope.allNotes) {
                if($scope.allNotes[index].content.indexOf($scope.searchInput) > -1) {
                    $scope.notes.push($scope.allNotes[index]);
                }
            }
        }
        else {
            // If search word is empty, display all notes
            console.log($scope.allNotes);
            $scope.notes = $scope.allNotes;
        }
    };

});
