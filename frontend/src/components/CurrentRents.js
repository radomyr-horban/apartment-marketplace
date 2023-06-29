import React from 'react'
import CurrentRent from './CurrentRent'

function CurrentRents({ currentRent, onCancelSubmit }) {
  return (
    <>
      <h2>🤩 Your current rent</h2>
      {currentRent &&
        currentRent.map((apartment) => {
          return (
            <CurrentRent
              key={apartment.id}
              apartment={apartment}
              onCancelSubmit={onCancelSubmit}
            />
          )
        })}
    </>
  )
}

export default CurrentRents
