var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var messagesSchema = new Schema({
    name: {type: String},
    message: {type: String}
},
{ 
    collection: 'messages' // specify the collection name
}   
);

module.exports = mongoose.model('messages', messagesSchema);