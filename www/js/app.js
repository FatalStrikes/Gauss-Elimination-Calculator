// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('GaussCtrl', function($scope){

  var A = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  var B = [0,0,0];

  $scope.gauss = function(data){

    A[0][0] = data.x11;
    A[0][1] = data.x12;
    A[0][2] = data.x13;
    B[0] = data.b1;
    A[1][0] = data.x21;
    A[1][1] = data.x22;
    A[1][2] = data.x23;
    B[1] = data.b2;
    A[2][0] = data.x31;
    A[2][1] = data.x32;
    A[2][2] = data.x33;
    B[2] = data.b3;

    var n = 2;
    for(var k = 0; k <= n-1; k++){
      for(var i = k+1; i <= n; i++){
        factor = (A[i][k]/A[k][k]);
        for(var j = k+1; j <= n; j++){
          A[i][j] = A[i][j] - (factor * A[k][j]);
        }
        B[i] = B[i] - (factor * B[k]);
      }

    }

    var x = [0,0,0];
    x[n] = B[n]/A[n][n];

    for( var i = n-1; i>=0; i--){
      var sum = B[i];
      for(var j = i+1; j<=n; j++){
        sum = sum - A[i][j]* x[j];
      }
      x[i] = sum / A[i][i]
    }

    $scope.x1 ="X1 = " + Math.round(x[0],6);
    $scope.x2 ="X2 = " + Math.round(x[1],6);
    $scope.x3 ="X3 = " + Math.round(x[2],6);
  }
});
