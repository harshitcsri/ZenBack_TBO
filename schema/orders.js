const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({

    bookingID: {
        type: String,
    },
    agentID: {
        type: String,
    },
    agentEmail: {
        type: String,
    },
    agentMobile: {
        type: String,
    },
    bookingDate: {
        type: String,
    },
    status: {
        type: String,
    },
    location: {
        type:String,
    },
    Comments: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrdersSchema, 'Orders');