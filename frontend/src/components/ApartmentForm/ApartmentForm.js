import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './ApartmentForm.css'
import useApartmentsContext from '../../hooks/useApartmentsContext'

function ApartmentForm({ isEditing, setIsEditing, editedApartment }) {
  const { dispatch } = useApartmentsContext()

  const [title, setTitle] = useState('')
  const [rooms, setRooms] = useState(1)
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  //! Fetch initial apartment data for editing
  useEffect(() => {
    if (isEditing && editedApartment) {
      setTitle(editedApartment.title)
      setRooms(editedApartment.rooms)
      setPrice(editedApartment.price)
      setDescription(editedApartment.description)
    }
  }, [isEditing, editedApartment])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const apartment = { title, rooms, price, description }

    //! Creating or editing

    if (isEditing) {
      const response = await fetch(
        `http://localhost:4000/api/apartments/${editedApartment._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(apartment),
        }
      )
      const json = await response.json()

      if (!response.ok) {
        setError(json.error)
      } else {
        setIsEditing(false)

        setError(null)
        setTitle('')
        setRooms(1)
        setPrice('')
        setDescription('')
        dispatch({ type: 'UPDATE_APARTMENT', payload: json })
      }
    } else {
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
      } else {
        // setEmptyFields([])
        setError(null)
        setTitle('')
        setRooms(1)
        setPrice('')
        setDescription('')
        // console.log('new apartment added', json)
        dispatch({ type: 'CREATE_APARTMENT', payload: json })
      }
    }
  }

  return (
    <>
      <h2>🤑 Create a new rent</h2>
      <form action='POST' className='apartment-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Name</label>
          <input
            type='text'
            name='title'
            id='titl'
            placeholder='Ex. Flat in the city center'
            maxLength={99}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // className={emptyFields.includes('title') ? 'error' : ''}
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

        <Button
          BgColor='#26cf96'
          text={isEditing ? 'Save' : 'Create'}
          className='submit-btn'
        />
        <br />
        {/* {error && <div className='error'>{error}</div>} */}
      </form>
    </>
  )
}

export default ApartmentForm
