const URL ="https://covid19.mathdro.id/api";

var app = angular.module('myApp', []);
app.controller('myCtrl', ($scope , $http)=>{
   
    // calling api
$http.get(URL).then(
	(response)=>{

//success

console.log(response.data);
$scope.all_data=response.data;
}, 

(error)=>{
console.log(error);
}
);

//get c dataa
$scope.get_c_data = ()=>{

	//console.log($scope.c);
	let country = $scope.c;
	if(country==''){
		$scope.c_data=undefined;
		return;}

		$http.get(`${URL}/countries/${country}`)
		.then ( (response)=>{
		console.log(response.data)
		$scope.c_data = response.data;
		},(error)=>{
		console.log(error)

		})
	
};


// get country data 
});