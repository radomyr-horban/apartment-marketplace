import React from 'react';
import CurrentRent from './CurrentRent';

function CurrentRents({currentRent, onCancelSubmit}) {
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
