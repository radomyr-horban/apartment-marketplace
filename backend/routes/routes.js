const express = require('express')
const router = express.Router()

// const Apartment = require('../models/apartmentModel')
// const RentedApartment = require('../models/rentedApartmentModel')

const {
  createApartment,
  getAllApartments,
  getSingleApartment,
  deleteApartment,
  updateApartment,
} = require('../controllers/apartmentController')

const {
  getAllRentedApartments,
  getSingleRentedApartment,
  addRentedApartment,
  deleteRentedApartment,
} = require('../controllers/rentedApartmentController')

//! Home
router.get('/apartments', getAllApartments)
router.get('/apartments/:id', getSingleApartment)
router.post('/apartments', createApartment)
router.delete('/apartments/:id', deleteApartment)
router.patch('/apartments/:id', updateApartment)

//! Rent
router.get('/rentedApartments', getAllRentedApartments)
router.get('/rentedApartments/:id', getSingleRentedApartment)
router.post('/rentedApartments', addRentedApartment)
router.delete('/rentedApartments/:id', deleteRentedApartment)

module.exports = router
