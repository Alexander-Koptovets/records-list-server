const { Schema, model } = require('mongoose');

const Record = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    role: { type: String, required: true },
    status: { type: String, required: true },
});

module.exports = model('Record', Record);