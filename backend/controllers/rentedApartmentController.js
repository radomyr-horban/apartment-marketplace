const RentedApartment = require('../models/rentedApartmentModel')
const mongoose = require('mongoose')

//! GET all
const getAllRentedApartments = async (req, res) => {
  const rentedApartments = await RentedApartment.find({}).sort({
    createdAt: -1,
  })
  res.status(200).json(rentedApartments)
}
//! GET one
const getSingleRentedApartment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such apartment!' })
  }

  const rentedApartment = await RentedApartment.findById(id)

  if (!rentedApartment) {
    return res.status(404).json({ error: 'No such apartment!' })
  }
  res.status(200).json(rentedApartment)
}

//! POST
const addRentedApartment = async (req, res) => {
  const { title, rooms, price, description } = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!rooms) {
    emptyFields.push('rooms')
  }
  if (!price) {
    emptyFields.push('price')
  }
  if (!description) {
    emptyFields.push('description')
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: 'Please fill all the fields', emptyFields })
  }

  // add document to rentedApartments db
  try {
    const rentedApartment = await RentedApartment.create({
      title,
      rooms,
      price,
      description,
    })
    res.status(200).json(rentedApartment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

//! DELETE
const deleteRentedApartment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such apartment!' })
  }

  const rentedApartment = await RentedApartment.findOneAndDelete({ _id: id })

  if (!rentedApartment) {
    return res.status(400).json({ error: 'No such apartment!' })
  }
  res.status(200).json(rentedApartment)
}

module.exports = {
  addRentedApartment,
  getAllRentedApartments,
  getSingleRentedApartment,
  deleteRentedApartment,
}
