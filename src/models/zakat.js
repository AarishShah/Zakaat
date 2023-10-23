const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema(
    {

        userId:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        }
    },
    {
        timestamps: true
    }
    );

const Calculator = mongoose.model('calculator', calculatorSchema);

module.exports = Calculator;
