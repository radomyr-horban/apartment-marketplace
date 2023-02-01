import React, {useState} from 'react';
import Button from './Button';
// 🤑
// 🤩
// 🏡

function Apartment() {
  // TODO: useState for each form field
  const [aptName, setAptName] = useState('Market square apartments');
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [daysNumber, setDaysNumber] = useState(1);
  const [aptPrice, setAptPrice] = useState(100);

  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          <span>{aptName} / </span>
          <span>{roomsNumber} bed / </span>
          <span>{daysNumber} day / </span>
          <span>${aptPrice}</span>
        </div>

        <div className='apt-buttons'>
          <Button BgColor='blue' text='Rent' />
          <Button BgColor='red' text='Delete' />
        </div>
      </div>
    </>
  );
}

export default Apartment;
