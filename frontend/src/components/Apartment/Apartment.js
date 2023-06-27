import React, { useState } from 'react'
import axios from 'axios'

import './Apartment.css'
import Button from '../Button/Button'
import useApartmentsContext from '../../hooks/useApartmentsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import useAxios from '../../hooks/useAxios'

function Apartment({ apartment, setEditedApartment, setIsEditing }) {
  const { dispatch } = useApartmentsContext()
  const { title, rooms, price, description, createdAt } = apartment

  //! useAxios

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/apartments/${apartment._id}`
      )
      const json = response.data
      if (response.status === 200) {
        dispatch({ type: 'DELETE_APARTMENT', payload: json })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
    setEditedApartment(apartment)
  }

  // TODO
  const handleRentClick = async () => {}

  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          <span>{title} / </span>
          <span>
            {rooms} {rooms > 1 ? 'rooms' : 'room'} /{' '}
          </span>
          <span>${price}</span>
          <br />
          <br />
          <span id='apt-description'>
            <b>Description: </b>
            <br />
            {description}
          </span>

          <br />
          <br />
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>

        <div className='apt-buttons'>
          <Button BgColor='blue' text='Rent' onClick={handleRentClick} />
          <Button BgColor='gold' text='Edit' onClick={handleEditClick} />
          <Button BgColor='red' text='Delete' onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  )
}

export default Apartment
