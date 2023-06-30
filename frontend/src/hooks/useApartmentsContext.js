import { useContext } from 'react'
import { ApartmentContext } from '../context/ApartmentContext'

const useApartmentsContext = () => {
  const context = useContext(ApartmentContext)

  if (!context) {
    throw Error(
      'useApartmentsContext must be used inside an ApartmentContextProvider!'
    )
  }

  return context
}

export default useApartmentsContext
