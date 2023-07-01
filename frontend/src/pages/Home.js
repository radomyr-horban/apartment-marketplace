import { useEffect, useState } from 'react'
import axios from 'axios'

import ApartmentForm from '../components/ApartmentForm/ApartmentForm'
import useApartmentsContext from '../hooks/useApartmentsContext'
import Apartments from '../components/Apartments'
import CurrentRents from '../components/CurrentRents'
import SortPanel from '../components/SortPanel/SortPanel'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()

  const [isEditing, setIsEditing] = useState(false)
  const [editedApartment, setEditedApartment] = useState(null)
  const [isApartmentLoading, setIsApartmentLoading] = useState(true)
  const [isRentLoading, setIsRentLoading] = useState(true)

  const [sortType, setSortType] = useState('default')
  const [filterValue, setFilterValue] = useState('default')

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/api/apartments` ||
            'http://localhost:4000/api/apartments'
        )
        const json = response.data

        if (response.status === 200) {
          dispatch({ type: 'GET_APARTMENTS', payload: json })
          setIsApartmentLoading(false)
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
      <CurrentRents
        isRentLoading={isRentLoading}
        setIsRentLoading={setIsRentLoading}
      />
      <SortPanel setFilterValue={setFilterValue} setSortType={setSortType} />
      <Apartments
        apartments={apartments}
        editedApartment={editedApartment}
        setEditedApartment={setEditedApartment}
        setIsEditing={setIsEditing}
        isApartmentLoading={isApartmentLoading}
        sortType={sortType}
        filterValue={filterValue}
      />
    </div>
  )
}

export default Home
