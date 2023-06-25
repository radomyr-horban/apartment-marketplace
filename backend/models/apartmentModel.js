const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
)

module.exports = mongoose.model('Apartment', apartmentSchema)
