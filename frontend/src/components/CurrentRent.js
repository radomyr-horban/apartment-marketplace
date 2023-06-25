import React from 'react';
import Button from './Button/Button';

function CurrentRent({apt, onCancelSubmit}) {
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
          <Button
            BgColor='red'
            text='Cancel rent'
            onClick={() => onCancelSubmit(apt.id)}
          />
        </div>
      </div>
    </>
  );
}

export default CurrentRent;
