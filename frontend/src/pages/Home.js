import { useEffect, useState } from 'react'
import axios from 'axios'

import Apartment from '../components/Apartment/Apartment'
import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'
import { useAxios } from '../hooks/useAxios'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)

  const [isLoading, setIsLoading] = useState(true)

  //! useAxios
  // const { response, error, isLoading } = useAxios({
  //   method: 'GET',
  //   url: '/',
  // })

  // useEffect(() => {
  //   if (response) {
  //     console.log(response)
  //     dispatch({ type: 'GET_APARTMENTS', payload: response })
  //   }
  // }, [response, dispatch, isEditing])

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/apartments')
        const json = response.data

        if (response.status === 200) {
          dispatch({ type: 'GET_APARTMENTS', payload: json })
          setIsLoading(false)
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          apartments &&
          apartments.map((apartment) => (
            <Apartment
              key={apartment._id}
              apartment={apartment}
              editedApartment={editedApartment}
              setEditedApartment={setEditedApartment}
              setIsEditing={setIsEditing}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Home
