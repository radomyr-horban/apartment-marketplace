import { useEffect, useState } from 'react'
import axios from 'axios'

import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'
import Apartments from '../components/Apartments'
import CurrentRents from '../components/CurrentRents'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  //! CurrentRent
  const [currentRent, setCurrentRent] = useState(null)

  const onCancelRent = (id) => {
    setCurrentRent(currentRent.filter((apartment) => apartment.id !== id))
  }

  //!

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/apartments')
        const json = response.data

        if (response.status === 200) {
          dispatch({ type: 'GET_APARTMENTS', payload: json })
          setIsLoading(false)
          // console.log(apartments)
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
      {/* <CurrentRents currentRent={currentRent} onCancelRent={onCancelRent} /> */}
      <CurrentRents />
      <Apartments
        apartments={apartments}
        editedApartment={editedApartment}
        setEditedApartment={setEditedApartment}
        setIsEditing={setIsEditing}
        isLoading={isLoading}
        currentRent={currentRent}
        setCurrentRent={setCurrentRent}
      />
    </div>
  )
}

export default Home
