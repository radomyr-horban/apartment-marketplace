const express = require('express')
const Apartment = require('../models/apartmentModel')
const router = express.Router()

const {
  createApartment,
  getAllApartments,
  getSingleApartment,
  deleteApartment,
  updateApartment,
} = require('../controllers/apartmentController')

router.get('/', getAllApartments)

router.get('/:id', getSingleApartment)

router.post('/', createApartment)

router.delete('/:id', deleteApartment)

router.patch('/:id', updateApartment)

module.exports = router
