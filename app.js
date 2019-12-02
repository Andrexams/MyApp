//registrar modulos
angular.module('jobsModule',[]);

//registrar main module
var app = angular.module('myApp',['jobsModule']);

app.value('sigla','My Angular first App');
app.constant('appid','APPMARTINS2019');