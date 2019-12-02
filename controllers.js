//a ordem das dependencias inteterfere para o DI
app.controller("MainNamesCtrl",['$scope','namesService','sigla','appid', function($scope, namesService, sigla, appid){
    $scope.appSigla = sigla + appid;
    $scope.filterName = "";
    $scope.names = namesService.getNames();
    console.dir('teste');
}]);
//Esse controller vai herdar as propriedades do MainNamesCtrl se adicionado como filho no template
app.controller("CrudNameCtrl", ['$scope','namesService', 'jobsService', 'jobsAvaliable',
 function($scope, namesService, jobsService, jobsAvaliable){
    $scope.newName = "";
    $scope.jobs = jobsService.getJobs();
    $scope.jobsAvaliable = jobsAvaliable.getAvaliableJobs();
    $scope.addName = function(name){
        //$scope.names.push(name);
        namesService.addName(name);
        $scope.newName = "";
    }
    $scope.delName = function(name){       
        namesService.deleteName(name);  
        $scope.names = namesService.getNames();//estranho     
    }
}]);

(function(){
    'use strict';

    app.controller('TestCtrl',['$scope','appid',TestCtrl]);

    /** @ngInject */
    function TestCtrl($scope, appid){
        var vm = this;
        $scope.nome;

        console.dir(vm);

        inicializa();

        function inicializa(){
            $scope.nome = "Andre Martins " + appid;
        }
    }

}());