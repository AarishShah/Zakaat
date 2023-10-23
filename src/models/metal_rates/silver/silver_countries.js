const mongoose = require('mongoose');

const silvercountrySchema = new mongoose.Schema(
  {
    country:
    {
      type: String,
      required: true,
    },
    currency:
    {
      type: String,
      required: true,
    },
    rate:
    {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Silvercountry = mongoose.model('Silvercountry', silvercountrySchema);

module.exports = Silvercountry;
