import React, { useState } from 'react'
import Button from '../Button/Button'
import './AddApartment.css'
import useApartmentsContext from '../../hooks/useApartmentsContext'

function AddApartment() {
  const { dispatch } = useApartmentsContext()

  const [name, setName] = useState('')
  const [rooms, setRooms] = useState(1)
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  // const [emptyFields, setEmptyFields] = useState([])

  // const [values, setValues] = useState(initialValues)

  // const handleChange = (e) => {
  //   const { name, value } = e.target

  //   if (e.target.type === 'number' || e.target.tagName === 'SELECT') {
  //     setValues({
  //       ...values,
  //       [name]: +value,
  //     })
  //   } else {
  //     setValues({
  //       ...values,
  //       [name]: value,
  //     })
  //   }

  //   if (e.target.type === 'number') {
  //     e.target.value = +parseInt(e.target.value)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const apartment = { name, rooms, price, description }

    const response = await fetch('http://localhost:4000/api/apartments', {
      method: 'POST',
      body: JSON.stringify(apartment),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      // setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      // setEmptyFields([])
      setError(null)
      setName('')
      setRooms(1)
      setPrice('')
      setDescription('')
      // console.log('new apartment added', json)
      dispatch({ type: 'CREATE_APARTMENT', payload: json })
    }
  }

  return (
    <>
      <h2>🤑 Create a new rent</h2>
      <form action='POST' className='apartment-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Ex. Flat in the city center'
            maxLength={99}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            // className={emptyFields.includes('name') ? 'error' : ''}
          />
        </div>

        <div className='form-field'>
          <label htmlFor='rooms'>Rooms</label>
          <select
            name='rooms'
            id='rooms'
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            // className={emptyFields.includes('rooms') ? 'error' : ''}
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
            id='price'
            placeholder='99.00'
            min={1}
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            // className={emptyFields.includes('price') ? 'error' : ''}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            // className={emptyFields.includes('description') ? 'error' : ''}
          />
        </div>

        <Button BgColor='#26cf96' text='Submit rent' class='submit-btn' />
        <br />
        {/* {error && <div className='error'>{error}</div>} */}
      </form>
    </>
  )
}

export default AddApartment
