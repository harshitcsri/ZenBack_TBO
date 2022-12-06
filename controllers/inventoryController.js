const connection = require('../db');
const OrdersSchema = require('../schema/orders');


const orderDetails = async (req, res, next) => {
    let data = req.body;
    let bookingID = data.bookingID;
    console.log("Request Recieved",data);
    const getOrder = await OrdersSchema.findOne({ bookingID: bookingID });
    console.log("OUT" + getOrder);
    if (getOrder) {
        const availableItem = getOrder;
        return res.status(200).json({
            status: "Success",
            message: "available",
            data: availableItem
        })
    } else {
        return res.status(400).json({
            status: "fail",
            message: "Not Available"
        })
    }
};

module.exports = {orderDetails};
