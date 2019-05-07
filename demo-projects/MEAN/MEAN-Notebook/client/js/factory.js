noteBookApp.factory('noteBookFactory', function($http) {
  var urlBase = '/api/notes';
  var _noteService = {};

  _noteService.getNotes = function() {
    return $http.get(urlBase);
  };

  _noteService.saveNote = function(note) {
    return $http.post(urlBase, note);
  };

  _noteService.updateNote = function(note) {
    return $http.put(urlBase, note);
  };

  _noteService.deleteNote = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _noteService;
});
