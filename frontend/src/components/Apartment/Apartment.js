import React, { useState } from 'react'
import Button from '../Button/Button'
import useApartmentsContext from '../../hooks/useApartmentsContext'
import './Apartment.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function Apartment({ apartment, setEditedApartment, setIsEditing }) {
  const { dispatch } = useApartmentsContext()

  // const [isEditing, setIsEditing] = useState(false)
  // const [editedApartment, setEditedApartment] = useState(apartment)

  const handleDeleteClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/apartments/${apartment._id}`,
      {
        method: 'DELETE',
      }
    )
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_APARTMENT', payload: json })
    }
  }

  //! FIX
  const handleEditClick = () => {
    setIsEditing(true)
    setEditedApartment(apartment)
    // dispatch({ type: 'UPDATE_APARTMENT', payload: apartment })
    // if (isEditing) {
    //   const response = await fetch(
    //     `http://localhost:4000/api/apartments/${apartment._id}`,
    //     {
    //       method: 'PATCH',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(response),
    //     }
    //   )
    //   const json = await response.json()
    //   if (response.ok) {
    //     dispatch({ type: 'UPDATE_APARTMENT', payload: json })
    //     setIsEditing(false)
    //   }
    // } else {
    //   setIsEditing(true)
    // }
  }

  const handleRentClick = async () => {}

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target
  //   setEditedApartment((prevApartment) => ({
  //     ...prevApartment,
  //     [name]: value,
  //   }))
  // }

  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          {/* {isEditing ? (
            <>
              <input
                type='text'
                name='title'
                maxLength={99}
                value={editedApartment.title}
                onChange={handleInputChange}
              />
              <br />
              <input
                type='number'
                name='rooms'
                max={3}
                min={1}
                value={editedApartment.rooms}
                onChange={handleInputChange}
              />
              <br />
              <input
                type='number'
                name='price'
                min={1}
                value={editedApartment.price}
                onChange={handleInputChange}
              />
              <br />
              <textarea
                name='description'
                maxLength={999}
                value={editedApartment.description}
                onChange={handleInputChange}
              />
            </>
          ) : ( */}
          <>
            <span>{apartment.title} / </span>
            <span>{apartment.rooms} rooms / </span>
            <span>${apartment.price}</span>
            <br />
            <br />
            <span id='apt-description'>
              <b>Description: </b>
              <br />
              {apartment.description}
            </span>
          </>
          {/* )} */}
          <br />
          <br />
          <span>
            {formatDistanceToNow(new Date(apartment.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>

        <div className='apt-buttons'>
          <Button BgColor='blue' text='Rent' onClick={handleRentClick} />
          <Button
            BgColor='gold'
            // text={editing ? 'Save' : 'Edit'}
            text='Edit'
            onClick={handleEditClick}
          />
          <Button BgColor='red' text='Delete' onClick={handleDeleteClick} />
        </div>
      </div>
    </>
  )
}

export default Apartment
