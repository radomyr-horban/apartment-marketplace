import React, { useEffect } from 'react'
import axios from 'axios'

import CurrentRent from './CurrentRent'
import useApartmentsContext from '../hooks/useApartmentsContext'

function CurrentRents({ isRentLoading, setIsRentLoading }) {
  const { rentedApartments, dispatch } = useApartmentsContext()

  useEffect(() => {
    const fetchRentedApartments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_CORS_ORIGIN_DEPLOY_SERVER}/api/rentedApartments` ||
            'http://localhost:4000/api/rentedApartments'
        )
        const json = response.data

        if (response.status === 200) {
          dispatch({ type: 'GET_RENTED_APARTMENTS', payload: json })
          setIsRentLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchRentedApartments()
  }, [dispatch])

  return (
    <>
      <h2>🤩 Your current rent</h2>
      {isRentLoading ? (
        <p>Loading...</p>
      ) : (
        rentedApartments &&
        rentedApartments.map((rentedApartment) => (
          <CurrentRent
            key={rentedApartment._id}
            rentedApartment={rentedApartment}
          />
        ))
      )}
    </>
  )
}

export default CurrentRents
