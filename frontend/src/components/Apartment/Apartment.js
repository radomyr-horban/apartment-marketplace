import Button from '../Button/Button'
import useApartmentsContext from '../../hooks/useApartmentsContext'

import './Apartment.css'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

// function Apartment({ apt, onDelete, onRent }) {
function Apartment({ apartment }) {
  const { dispatch } = useApartmentsContext()

  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:4000/api/apartments/${apartment._id}`,
      {
        method: 'DELETE',
      }
    )
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_APARTMENT', payload: json })
    }
  }

  return (
    <>
      <div className='apt-block'>
        <div className='apt-info'>
          <span>{apartment.name} / </span>
          <span>{apartment.rooms} rooms / </span>
          <span>${apartment.price}</span>
          <br />
          <br />
          <span id='apt-description'>
            <b>Description: </b>
            <br />
            {apartment.description}
          </span>
          <br />
          <br />
          {/* <span>{apartment.createdAt}</span> */}
          <span>
            {formatDistanceToNow(new Date(apartment.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>

        <div className='apt-buttons'>
          {/* <Button BgColor='blue' text='Rent' onClick={() => onRent(apt)} /> */}
          <Button BgColor='blue' text='Rent' />
          <Button
            BgColor='red'
            text='Delete'
            // onClick={() => onDelete(apt.id)}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </>
  )
}

export default Apartment
