messageApp.service('MessageService', ['$http', function($http){
    console.log('Message Service loaded.');
    var self = this;
     self.messages = { list: [] }; 
}]);