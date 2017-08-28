messageApp.service('MessageService', ['$http', function ($http) {
    console.log('Message Service loaded.');
    var self = this;
    self.messages = {
        list: []
    };
    self.addMessage = function (messageToAdd) {
        console.log('service, object to send to server:', messageToAdd);
        $http.post('/messages', messageToAdd).then(function (response) {
            console.log('Saved new message!');
        });
    };
    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.messages.list = response.data;

            console.log('services get data: ', self.listings);
        });
    };

}]);