import React, {useState} from 'react';
import Button from './Button';

const initialValues = {
  name: 'some room',
  days: '3',
  rooms: '1',
  price: '50',
  description: 'some room description',
};

function AddApartment({onAdd}) {
  // const onClick = () => {
  //   console.log('click');
  // };

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

    // console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(values);
    setValues(initialValues);
  };

  return (
    //!TODO: add validation for days field
    <>
      <h2>🤑Create a new rent</h2>
      <form action='' className='apartment-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Ex. Flat in the city center'
            maxLength={99}
            required
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='days'>Days</label>
          <input
            type='number'
            name='days'
            placeholder='1'
            min={1}
            required
            value={values.days}
            onChange={handleChange}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='rooms'>Rooms</label>
          <select
            name='rooms'
            id='rooms'
            value={values.rooms}
            onChange={handleChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3+'>3+</option>
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

        <input type='submit' value='Submit rent' />

        {/* <Button BgColor='#26cf96' text='Submit rent' onClick={onClick} /> */}
      </form>
    </>
  );
}

export default AddApartment;
