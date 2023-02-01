import React, {useState} from 'react';
import Button from './Button';

const initialValues = {
  title: '',
  days: '',
  rooms: '',
  price: '',
  description: '',
};

function ApartmentForm() {
  const [numOfApts, setNumOfApts] = useState(0);
  // TODO: useState for each form field
  // const [aptTitle, setAptTitle] = useState();
  // const [daysNumber, setDaysNumber] = useState(1);
  // const [roomsNumber, setRoomsNumber] = useState(0);
  // const [rentPrice, setRentPrice] = useState();
  // const [aptDescription, setAptDescription] = useState('hello');
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    console.log(values);
  };

  return (
    <>
      <h2>🤑Create a new rent</h2>
      <form action='' className='apartment-form'>
        <div className='form-field'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            placeholder='Ex. Flat in the city center'
            maxLength={99}
            required
            value={values.title}
            onChange={handleChange}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='days'>Days</label>
          <input
            type='number'
            name='days'
            placeholder='4'
            min={1}
            required
            value={values.days}
            onChange={handleChange}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='rooms'>Rooms</label>
          <select name='rooms' id='rooms'>
            <option value='one'>1</option>
            <option value='two'>2</option>
            <option value='three'>3+</option>
          </select>
        </div>

        <div className='form-field'>
          <label htmlFor='price'>Rent Price</label>
          <input
            type='number'
            name='price'
            placeholder='99.00'
            min={1}
            required
            value={values.price}
            onChange={handleChange}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='1'
            name='description'
            placeholder='Ex. Flat in the city center'
            maxLength={999}
            required
            value={values.description}
            onChange={handleChange}
          />
        </div>

        <Button BgColor='#26cf96' text='Submit rent' />
      </form>
    </>
  );
}

export default ApartmentForm;
