import React from 'react'
import Apartment from './Apartment/Apartment'
// import useApartmentsContext from '../hooks/useApartmentsContext'

// function Apartments({ apartments, onDelete, onRent, sortType, filterValue }) {
function Apartments({
  apartments,
  editedApartment,
  setEditedApartment,
  setIsEditing,
  isLoading,
  // !
  currentRent,
  setCurrentRent,
}) {
  // let apartmentsCopy = [...apartments]
  // console.log('Apartments: ', apartments)
  // console.log('ApartmentsCopy: ', apartmentsCopy)

  // const sortByPrice = (sortType) => {
  //   return apartmentsCopy.sort((a, b) => {
  //     if (sortType === 'low-to-high') {
  //       return a.price - b.price
  //     } else if (sortType === 'high-to-low') {
  //       return b.price - a.price
  //     }
  //     return apartments
  //   })
  // }
  // // sortByPrice(sortType)

  // const filterByRooms = (filterValue) => {
  //   if (filterValue !== 'default') {
  //     return (apartmentsCopy = apartmentsCopy.filter((apt) => {
  //       return apt.rooms === +filterValue
  //     }))
  //   }
  //   return apartments
  // }
  // // filterByRooms(filterValue)

  return (
    <>
      <div className='apartments-panel'>
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
              //!
              currentRent={currentRent}
              setCurrentRent={setCurrentRent}
            />
          ))
        )}
      </div>
    </>
  )
}

export default Apartments
