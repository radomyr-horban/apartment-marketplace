import React from 'react';
import Apartment from './Apartment';

function Apartments({apartments, onDelete, onRent, sortType, filterValue}) {
  let apartmentsCopy = [...apartments];

  const sortByPrice = (sortType) => {
    return apartmentsCopy.sort((a, b) => {
      if (sortType === 'low-to-high') {
        return a.price - b.price;
      } else if (sortType === 'high-to-low') {
        return b.price - a.price;
      }
      return apartments;
    });
  };
  sortByPrice(sortType);

  const filterByRooms = (filterValue) => {
    if (filterValue !== 'default') {
      return (apartmentsCopy = apartmentsCopy.filter((apt) => {
        return apt.rooms === +filterValue;
      }));
    }
    return apartments;
  };
  filterByRooms(filterValue);

  return (
    <>
      <div className='apartments-panel'>
        {apartmentsCopy.map((apt) => {
          return (
            <Apartment
              key={apt.id}
              apt={apt}
              onDelete={onDelete}
              onRent={onRent}
            />
          );
        })}
      </div>
    </>
  );
}

export default Apartments;
