import { useEffect, useState } from 'react'
import axios from 'axios'

import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'
import Apartments from '../components/Apartments'
import CurrentRents from '../components/CurrentRents'
import SortPanel from '../components/SortPanel/SortPanel'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()
  // console.log(apartments)

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

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
      <CurrentRents />
      <SortPanel
      // aptsCounter={aptsCounter}
      // onFilter={setFilterValue}
      // setSortType={setSortType}
      />
      <Apartments
        apartments={apartments}
        editedApartment={editedApartment}
        setEditedApartment={setEditedApartment}
        setIsEditing={setIsEditing}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Home
