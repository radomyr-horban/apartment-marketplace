import React from 'react'
import Button from './Button/Button'

function CurrentRent({ apartment, onCancelSubmit }) {
  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
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
        </div>

        <div className='apt-buttons'>
          <Button
            BgColor='red'
            text='Cancel rent'
            onClick={() => onCancelSubmit(apartment.id)}
          />
        </div>
      </div>
    </>
  )
}

export default CurrentRent
