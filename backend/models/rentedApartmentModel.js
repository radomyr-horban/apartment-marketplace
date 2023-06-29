const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rentedApartmentSchema = new Schema(
  {
    title: {
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

module.exports = mongoose.model('rented-apartment', rentedApartmentSchema)
