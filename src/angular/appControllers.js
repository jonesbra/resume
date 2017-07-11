app.controller('navCtrl', function($scope, $location, $window) {
  $scope.getClass = function(path) {
    if ($location.path()===path)
      return 'active item'

    else
      return 'item'
  }

  $scope.loadPage = function(url) {
    $window.location.href = url
  }
})
