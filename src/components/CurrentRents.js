import React from 'react';
// import Apartment from './Apartment';
import CurrentRent from './CurrentRent';

function CurrentRents({currentRent, onCancelSubmit}) {
  // console.log(currentRent);
  return (
    <>
      <h2>🤩 Your current rent</h2>
      {currentRent &&
        currentRent.map((apt) => {
          return (
            <CurrentRent
              key={apt.id}
              apt={apt}
              onCancelSubmit={onCancelSubmit}
            />
          );
        })}
    </>
  );
}

export default CurrentRents;
