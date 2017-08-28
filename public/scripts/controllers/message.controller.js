messageApp.controller('messageController', ['MessageService', function(MessageService){
    console.log("message controller loaded");
    var self = this;
    self.addMessage = function (messageToAdd) {
        MessageService.addMessage(messageToAdd);
    };
}]);