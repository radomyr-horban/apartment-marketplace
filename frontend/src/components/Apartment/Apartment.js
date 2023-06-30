import React, { useState } from 'react'
import axios from 'axios'

import './Apartment.css'
import Button from '../Button/Button'
import useApartmentsContext from '../../hooks/useApartmentsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Apartment({ apartment, setEditedApartment, setIsEditing }) {
  const { rentedApartments, dispatch } = useApartmentsContext()
  const { title, rooms, price, description, createdAt } = apartment

  const [error, setError] = useState(null)

  const handleRentClick = async () => {
    const isRented = rentedApartments.find(
      (rentedApartment) => rentedApartment.postId === String(apartment._id)
    )

    if (!isRented) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/api/rentedApartments` ||
            'http://localhost:4000/api/rentedApartments',
          { ...apartment, postId: String(apartment._id) },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const json = response.data

        if (response.status !== 200) {
          setError(json.error)
        } else {
          setError(null)
          dispatch({ type: 'ADD_RENTED_APARTMENT', payload: json })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const handleEditClick = () => {
    setIsEditing(true)
    setEditedApartment(apartment)
  }

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/api/apartments/${apartment._id}` ||
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
