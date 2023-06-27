import { useEffect, useState } from 'react'
import axios from 'axios'

import Apartment from '../components/Apartment/Apartment'
import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/apartments')
        const json = response.data

        if (response.status === 200) {
          dispatch({ type: 'GET_APARTMENTS', payload: json })
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchApartments()
  }, [dispatch, isEditing])

  return (
    <div className='home'>
      <h1>Apartments Marketplace</h1>
      <ApartmentForm
        isEditing={isEditing}
        editedApartment={editedApartment}
        setIsEditing={setIsEditing}
      />
      <div className='apartments'>
        {apartments &&
          apartments.map((apartment) => (
            <Apartment
              key={apartment._id}
              apartment={apartment}
              editedApartment={editedApartment}
              setEditedApartment={setEditedApartment}
              setIsEditing={setIsEditing}
            />
          ))}
      </div>
    </div>
  )
}

export default Home
