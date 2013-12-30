var app = angular.module('todo-angular', ['firebase']);
function MainController($scope, $firebase) {
	var ref = new Firebase('https://cf-todos.firebaseio.com/');
	$scope.todos = $firebase(ref);
	$scope.addTodo = function(event) {
		if (event.keyCode!= 13) return;
		$scope.todos.$add({content: $scope.todo, done: false});
		$scope.todo = '';
	};

	$scope.save = function() {
		$scope.todos.$save();
	};
}
