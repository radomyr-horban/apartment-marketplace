const Apartment = require('../models/apartmentModel')
const mongoose = require('mongoose')

const getAllApartments = async (req, res) => {
  const apartments = await Apartment.find({}).sort({ createdAt: -1 })
  res.status(200).json(apartments)
}

const getSingleApartment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such apartment!' })
  }

  const apartment = await Apartment.findById(id)

  if (!apartment) {
    return res.status(404).json({ error: 'No such apartment!' })
  }
  res.status(200).json(apartment)
}

const createApartment = async (req, res) => {
  const { name, rooms, price, description } = req.body

  // add doc to db
  try {
    const apartment = await Apartment.create({
      name,
      rooms,
      price,
      description,
    })
    res.status(200).json(apartment)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const deleteApartment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such apartment!' })
  }

  const apartment = await Apartment.findOneAndDelete({ _id: id })

  if (!apartment) {
    return res.status(400).json({ error: 'No such apartment!' })
  }
  res.status(200).json(apartment)
}

const updateApartment = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such apartment!' })
  }

  const apartment = await Apartment.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  )

  if (!apartment) {
    return res.status(400).json({ error: 'No such apartment!' })
  }
  res.status(200).json(apartment)
}

module.exports = {
  createApartment,
  getAllApartments,
  getSingleApartment,
  deleteApartment,
  updateApartment,
}
