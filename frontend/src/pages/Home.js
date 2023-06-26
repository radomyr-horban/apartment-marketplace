import { useEffect } from 'react'

import Apartment from '../components/Apartment/Apartment'
import AddApartment from '../components/AddApartment/AddApartment'
import useApartmentsContext from '../hooks/useApartmentsContext'

const Home = () => {
  const { apartments, dispatch } = useApartmentsContext()
  useEffect(() => {
    const fetchApartments = async () => {
      const response = await fetch('http://localhost:4000/api/apartments')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'GET_APARTMENTS', payload: json })
      }
    }

    fetchApartments()
  }, [dispatch])

  return (
    <div className='home'>
      <h1>Apartments Marketplace</h1>
      <AddApartment />
      <div className='apartments'>
        {apartments &&
          apartments.map((apartment) => (
            <Apartment key={apartment._id} apartment={apartment} />
          ))}
      </div>
    </div>
  )
}

export default Home
