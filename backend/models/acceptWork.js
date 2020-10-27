const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {
    ObjectId
} = mongoose.Schema;

const CartItemSchema = new mongoose.Schema({
    work: {
        type: ObjectId,
        ref: "Work"
    },
    worktype: String,
    wage: Number
}, {
    timestamps: true
});

const CartItem = mongoose.model("CartItem", CartItemSchema);

const AcceptWorkSchema = new mongoose.Schema({
    works: [CartItemSchema],
    address: String,
    status: {
        type: String,
        default: "Not Accepted",
        enum: ["Not Accepted", "Accepted",  "Cancelled"] // enum means string objects
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

const AcceptWork = mongoose.model("AcceptWork", AcceptWorkSchema);

module.exports = {
    AcceptWork,
    CartItem
};