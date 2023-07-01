import React from 'react'
import axios from 'axios'

import Button from './Button/Button'
import useApartmentsContext from '../hooks/useApartmentsContext'

function CurrentRent({ rentedApartment }) {
  const { dispatch } = useApartmentsContext()

  const { title, rooms, price, description } = rentedApartment

  const handleCancelRent = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/api/rentedApartments/${rentedApartment._id}` ||
          `http://localhost:4000/api/rentedApartments/${rentedApartment._id}`
      )
      const json = response.data
      if (response.status === 200) {
        dispatch({ type: 'DELETE_RENTED_APARTMENT', payload: json })
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
          <span>{rooms} rooms / </span>
          <span>${price}</span>
          <br />
          <br />
          <span id='apt-description'>
            <b>Description: </b>
            <br />
            {description}
          </span>
        </div>

        <div className='apt-buttons'>
          <Button
            BgColor='red'
            text='Cancel rent'
            onClick={() => handleCancelRent()}
          />
        </div>
      </div>
    </>
  )
}

export default CurrentRent
