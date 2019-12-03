//registrar modulos
angular.module('jobsModule',[]);

//registrar main module
var app = angular.module('myApp',['jobsModule']);

app.value('sigla','MyApp');
app.constant('appid','APPMARTINS2019');
