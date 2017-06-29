var app = angular.module('myApp', []);
app.controller('MyCtrl',['$scope','$http', function($scope,$http) {


		/*$scope.insert = function(){
			console.log($scope.fname);
			$http({
         			method:"POST",
        			 url:"http://localhost/crudnew/back/public/insert",
          					data:{
             						 fname:$scope.fname,
            
          							}
      			})
			.success(function(result){
          
          
          return(fname);
          })
      .error(function(data){
          alert('error');
      });
		}
			$http({

				method:"GET",
				url:"http://localhost/crudnew/back/public/getdata",


			})
			 .success(function(result){
            $scope.username = result;
               console.log(result);

            })
			 	.error(function(data){
          alert('error');
      });

			 	$scope.delete = function(uname){
			 		console.log(uname);
			 		$http({
			 				method:"POST",
			 				url:"http://localhost/crudnew/back/public/delete",
			 				data:uname
			 		})
			 		.success(function(result){
			 			// alert('success');
			 			//$scope.username.splice($scope.username.indexof(data));
			 			console.log(result);
			 			})
			 		.error(function(data){
			 			alert('error');
			 		})
			 	}
			 	$scope.edit = function(usename,x){
			 			//console.log(usename,x);
			 		$http({
			 				method:"POST",
			 				url:"http://localhost/crudnew/back/public/edit",
							data:{usename:usename,prev:x}			 				

			 		})
			 		.success(function(result){
			 			alert('success');
			 			
			 			console.log(result);
			 			})
			 		.error(function(data){
			 			alert('error');
			 		})
			 	}
	}])*/