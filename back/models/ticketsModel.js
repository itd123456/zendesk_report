const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    id:{type: String, unique:true},
    address:{type: String},
    name:{type: String},
    created_at:{type: String},
    updated_at:{type: String},
    subject:{type: String},
    description:{type: String},
    priority:{type: String},
    status:{type: String},
    tags:{type: String},
    custom_fields:{type: String}
});

module.exports = TicketModel = mongoose.model("ticket", ticketSchema);