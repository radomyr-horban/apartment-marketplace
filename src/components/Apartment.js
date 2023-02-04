import React, {useState} from 'react';
import Button from './Button';
// 🤑
// 🤩
// 🏡

function Apartment({apt, onDelete, onRent}) {
  // TODO: useState for each form field
  // const [aptName, setAptName] = useState('Market square apartments');
  // const [roomsNumber, setRoomsNumber] = useState(1);
  // const [daysNumber, setDaysNumber] = useState(1);
  // const [aptPrice, setAptPrice] = useState(100);

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
          <span id='apt-description'>${apt.description}</span>
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
