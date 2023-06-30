import React, { useEffect, useState } from 'react'

import Apartment from './Apartment/Apartment'
import sortByPrice from '../utils/sortUtil'
import filterByRooms from '../utils/filterUtil'

function Apartments({
  apartments,
  editedApartment,
  setEditedApartment,
  setIsEditing,
  isLoading,
  sortType,
  filterValue,
}) {
  const [filteredApartments, setFilteredApartments] = useState(apartments)

  useEffect(() => {
    let apartmentsCopy = [...apartments]
    apartmentsCopy = sortByPrice(apartmentsCopy, sortType)
    apartmentsCopy = filterByRooms(apartmentsCopy, filterValue)
    setFilteredApartments(apartmentsCopy)
  }, [apartments, sortType, filterValue])

  return (
    <>
      <div className='apartments-panel'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredApartments &&
          filteredApartments.map((apartment) => (
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
