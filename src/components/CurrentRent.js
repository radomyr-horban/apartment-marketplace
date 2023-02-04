import React, {useState} from 'react';
import Button from './Button';
// 🤑
// 🤩
// 🏡

function CurrentRent({apt, onCancelSubmit}) {
  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          <span>{apt.name} / </span>
          <span>{apt.rooms} rooms / </span>
          <span>{apt.days} days / </span>
          <span>${apt.price}</span>
          <br />
          <br />
          <span>${apt.description}</span>
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
