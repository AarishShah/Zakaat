const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({

    expression:
    {
        type: String,
        required: true,
        trim: true
    },
    result:
    {
        type: String,
        required: true,
        trim: true
    },
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, {
    timestamps: true
});

const Calculator = mongoose.model('calculator', calculatorSchema);

module.exports = Calculator;
