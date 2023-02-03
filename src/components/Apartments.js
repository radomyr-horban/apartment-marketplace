import React from 'react';
import Apartment from './Apartment';

function Apartments({apartments, onDelete, onRent}) {
  return (
    <>
      {apartments.map((apt) => {
        return (
          <Apartment
            key={apt.id}
            apt={apt}
            onDelete={onDelete}
            onRent={onRent}
          />
        );
      })}
    </>
  );
}

export default Apartments;
