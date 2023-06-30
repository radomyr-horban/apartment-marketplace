import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import './ApartmentForm.css'
import useApartmentsContext from '../../hooks/useApartmentsContext'
import axios from 'axios'

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

    //! Creating or Editing

    if (isEditing) {
      try {
        const response = await axios.patch(
          `http://localhost:4000/api/apartments/${editedApartment._id}`,
          apartment,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const json = response.data

        if (response.status !== 200) {
          setError(json.error)
        } else {
          setIsEditing(false)
          // setEmptyFields([])
          // console.log('apartment was edited', json)

          setError(null)
          setTitle('')
          setRooms(1)
          setPrice('')
          setDescription('')
          dispatch({ type: 'UPDATE_APARTMENT', payload: json })
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      //! axios
      try {
        const response = await axios.post(
          'http://localhost:4000/api/apartments',
          apartment,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const json = response.data

        if (response.status !== 200) {
          setError(json.error)
          // setEmptyFields(json.emptyFields)
        } else {
          // setEmptyFields([])
          // console.log('apartment was created', json)

          setError(null)
          setTitle('')
          setRooms(1)
          setPrice('')
          setDescription('')
          dispatch({ type: 'CREATE_APARTMENT', payload: json })
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <h2>🤑 Create a new rent</h2>
      <form className='apartment-form' onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Name</label>
          <input
            type='text'
            name='title'
            id='title'
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
          className='btn submit-btn'
        />
        {/* <br /> */}
        {/* {error && <div className='error'>{error}</div>} */}
      </form>
    </>
  )
}

export default ApartmentForm
