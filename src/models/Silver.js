const mongoose = require('mongoose');

const silverSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
});

const Silver = mongoose.model('Silver', silverSchema);

module.exports = Silver;
