angular.module('todoApp', ['ngMaterial', 'app.config', 'app.directives'])
  .controller('TodoListController', ($scope) => {
    if (window.localStorage.getItem('todos')) {
      $scope.todos = JSON.parse(window.localStorage.getItem('todos'));
    } else {
      $scope.todos = [];
    }
		/**
		 * Adds a todo item
		 */
    $scope.addTodoItem = () => {
      $scope.todos.push({ text: $scope.addTodo.text, done: false });
      $scope.addTodo.text = '';
      window.localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
		/**
		 * Checks the remaining number of TODOs
		 */
    $scope.remaining = () => {
      var count = 0;
      angular.forEach($scope.todos, (todo) => {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
		/**
		 * Selects all the TODOs, marking them as done
		 */
    $scope.selectAll = (deselect) => {
      if (deselect) {
        angular.forEach($scope.todos, (todo) => {
          todo.done = true;
        })
      } else {
        angular.forEach($scope.todos, (todo) => {
          todo.done = false;
        })
      }
      $scope.updateDoneStatus();
    }
		/**
		 * Updates the done status
		 */
    $scope.updateDoneStatus = () => {
      window.localStorage.setItem('todos', JSON.stringify($scope.todos));
    }
		/**
		 * Archives done todos
		 */
    $scope.archive = () => {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, (todo) => {
        if (!todo.done) $scope.todos.push(todo);
      });
      window.localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
  });