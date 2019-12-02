
app.service('namesService',['appid', function(appid){

        let names = ['Mark', 'John', 'Burns', 'Martin', 'Robert', 'Michael', 'Jimmy'];

        this.getNames = function getNames(){
            return names;
        }

        this.addName = function addName(name){
            names.push(name);
        }

        this.deleteName = function deleteName(name){
            names = arrayRemove(names, name);           
            console.log(names);
        }

        function arrayRemove(arr, value) {
            return arr.filter(function(ele){
                return ele != value;
            });
         }

    }
]);

(function(){
    'use strict';

    angular
        .module('jobsModule')
        .service('jobsService',['appid',JobsService])

    /** @ngInject */
    function JobsService(appid){

        this.getJobs = getJobs;

        function getJobs(){
            return ['Developer','Architech','Manager','Director']
        }
    }

}());

(function(){
    'use strict';

    angular
        .module('jobsModule')
        .factory('jobsAvaliable',['appid','jobsService', JobsAvaliable])

    /** @ngInject */
    function JobsAvaliable(appid,jobsService){

        let countAvaliable = 10;

        return {
            getAvaliableJobs: getAvaliableJobs,
            countAvaliable: countAvaliable
        }

        function getAvaliableJobs(){
            return jobsService.getJobs()[0];
        }
    }

}());
