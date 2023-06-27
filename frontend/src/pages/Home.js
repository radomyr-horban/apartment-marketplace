import { useEffect, useState } from 'react'

import Apartment from '../components/Apartment/Apartment'
import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await fetch('http://localhost:4000/api/apartments')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'GET_APARTMENTS', payload: json })
      }
    }

    fetchApartments()
  }, [dispatch, isEditing])

  return (
    <div className='home'>
      <h1>Apartments Marketplace</h1>
      {/* <ApartmentForm /> */}
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
