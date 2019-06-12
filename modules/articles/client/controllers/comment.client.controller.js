(function () {
  'use strict';

  angular
    .module('comment')
    .controller('CommentController', CommentController);

  CommentController.$inject = ['$scope', 'Authentication' ];

  function CommentController($scope, comment, Authentication) {
    var vm = this;

    vm.comment = comment;
    vm.authentication = authentication;

    $scope.save = new Comment();
    $scope.newComment.$save(function() {

    }

    $scope.edit = function(el, idx) {
    $scope.newComment = $scope.comment[idx].comment;
    $scope.comment.splice(idx, 1);

    $scope.delete = function() {
    $scope.comment.splice(this.$index, 1);
  }

}());
