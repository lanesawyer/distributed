var app = angular.module("sampleApp", ['firebase']);

app.controller("MainCtrl", ["$firebaseArray", '$scope', '$filter', function($firebaseArray, $scope, $filter) {
  var ref = new Firebase("https://blinding-torch-6662.firebaseio.com/messages");

  $scope.boardId = window.location.hash.substring(1);
  $scope.messages = $firebaseArray(ref);

  function calculateAllHeights(messages) {
    var orderedArray = $filter('orderBy')(messages, ['-votes', 'date']);
     orderedArray.forEach(function(message) {
      var filtered = orderedArray.filter(function(item) {
        return item.type.id === message.type.id;
      });

      message.currentHeight = filtered.indexOf(message) * 150 + 150 + 'px';
      $scope.messages.$save(message);
    });
  }

  $scope.messages.$loaded().then(function(messages) {
    calculateAllHeights(messages);
  });

  $scope.messageTypes = [{
  	id: 1,
  	value: "Went well"
  }, { 
  	id: 2,
  	value: "To improve"
  }, { 
  	id: 3,
  	value: "Action Items"
  }];

  $scope.addVote = function(key, votes) {
  	if(!localStorage.getItem(key)) {
  		ref.child(key).update({ votes: votes + 1, date: Firebase.ServerValue.TIMESTAMP });
  		localStorage.setItem(key, 1);
  	}

    calculateAllHeights($scope.messages);
  }

  $scope.deleteMessage = function(message) {
  	if(confirm('Are you sure you want to delete this note?')) {
  		$scope.messages.$remove(message).then(function() {
        calculateAllHeights($scope.messages);    
      });
  	}
  }

  $scope.getHeight = function(message, index) {
    if(!message.currentHeight) {
      return index * 150 + 150 + 'px';
    } else {
      return message.currentHeight;
    }
  }

  $scope.alreadyVoted = function(key) {
  	return localStorage.getItem(key);
  }

  $scope.addNew = function(type) {
  	$scope.messages.$add({
      text: '',
      type: type,
      date: Firebase.ServerValue.TIMESTAMP,
      votes: 0
    }).then(function(ref) {
      var id = ref.key();
      angular.element($('#' + id)).scope().isEditing = true;
      $('#' + id + " textarea").focus();

      calculateAllHeights($scope.messages);  
    });
  }
}]);