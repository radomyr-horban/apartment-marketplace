import React from 'react';
import Button from './Button';

function Apartment({apt, onDelete, onRent}) {
  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          <span>{apt.name} / </span>
          <span>{apt.rooms} rooms / </span>
          <span>${apt.price}</span>
          <br />
          <br />
          <span id='apt-description'>
            <b>Description: </b>
            <br />
            {apt.description}
          </span>
        </div>

        <div className='apt-buttons'>
          <Button BgColor='blue' text='Rent' onClick={() => onRent(apt)} />
          <Button
            BgColor='red'
            text='Delete'
            onClick={() => onDelete(apt.id)}
          />
        </div>
      </div>
    </>
  );
}

export default Apartment;
