import React from 'react'
import Apartment from './Apartment/Apartment'
// import useApartmentsContext from '../hooks/useApartmentsContext'

function Apartments({
  apartments,
  editedApartment,
  setEditedApartment,
  setIsEditing,
  isLoading,
  //TODO: Move logic to ApartmentContext and remove these props?
  sortType,
  filterValue,
}) {
  let apartmentsCopy = [...apartments]

  const sortByPrice = (sortType) => {
    return apartmentsCopy.sort((a, b) => {
      if (sortType === 'low-to-high') {
        return a.price - b.price
      } else if (sortType === 'high-to-low') {
        return b.price - a.price
      }
      return apartments
    })
  }
  sortByPrice(sortType)

  const filterByRooms = (filterValue) => {
    if (filterValue !== 'default') {
      return (apartmentsCopy = apartmentsCopy.filter((apt) => {
        return apt.rooms === +filterValue
      }))
    }
    return apartments
  }
  filterByRooms(filterValue)

  return (
    <>
      <div className='apartments-panel'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          apartmentsCopy &&
          apartmentsCopy.map((apartment) => (
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
    </>
  )
}

export default Apartments
