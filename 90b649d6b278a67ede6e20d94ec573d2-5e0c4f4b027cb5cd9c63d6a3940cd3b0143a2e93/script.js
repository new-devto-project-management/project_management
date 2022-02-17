angular.module("textAngularTest", ["textAngular"]);
function wysiwygeditor($scope) {
  $scope.orightml =
    '';
  $scope.htmlcontent = $scope.orightml;
  $scope.disabled = false;
}
