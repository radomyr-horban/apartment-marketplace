import React, {useState} from 'react';
import Button from './Button';

const initialValues = {
  name: 'some room',
  days: 3,
  rooms: 1,
  price: 50,
  description: 'some room description',
};

function AddApartment({onAdd}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const {name, value} = e.target;

    //! validation for the input type
    if (e.target.type === 'number' || e.target.tagName === 'SELECT') {
      setValues({
        ...values,
        [name]: +value,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }

    // ! removing leading zeros from 'number' input
    if (e.target.type === 'number') {
      e.target.value = +parseInt(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(values);
    setValues(initialValues);
  };

  return (
    <>
      <h2>🤑 Create a new rent</h2>
      <form action='POST' className='apartment-form' onSubmit={handleSubmit}>
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
            <option value='3'>3</option>
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

        {/* <input type='submit' value='Submit rent' /> */}

        <Button BgColor='#26cf96' text='Submit rent' class='submit-btn' />
      </form>
    </>
  );
}

export default AddApartment;
