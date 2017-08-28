var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var smessages = new Schema({
    name: {type: String},
    message: {type: String}
},
{ 
    collection: 'messages' // specify the collection name
}   
);

module.exports = mongoose.model('messages', salesListingSchema);