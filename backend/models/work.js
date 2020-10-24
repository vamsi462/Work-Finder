const mongoose = require('mongoose')
const {
    ObjectId
} = mongoose.Schema

const WorkShema = new mongoose.Schema({
    worktype: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },

    address: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    phone: {
        type: Number,
        required: true,
        maxlength: 32,
    },
    wage: {
         type: Number,
         required: true,
         maxlength: 10,
     },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
    reqWorkers: {
        type: Number,
        required:true
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true
});


module.exports = mongoose.model("Work", WorkShema)