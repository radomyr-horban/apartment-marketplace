import {useEffect, useState} from 'react';
import './App.css';
import Apartments from './components/Apartments';
import AddApartment from './components/AddApartment/AddApartment';
import SortPanel from './components/SortPanel/SortPanel';
import CurrentRents from './components/CurrentRents';

// TODO:
// 1) remove initial value from Form
// 2) fix Form responsiveness
// 3) split CSS for seperate components

const initialState = [
  {
    id: '1',
    name: 'Market square apartments 1',
    rooms: 1,
    price: 10,
    description: 'Some description of the apartment',
  },
  {
    id: '2',
    name: 'Market square apartments 2',
    rooms: 2,
    price: 20,
    description: 'Some description of the apartment',
  },
  {
    id: '3',
    name: 'Market square apartments 3',
    rooms: 3,
    price: 30,
    description: 'Some description of the apartment',
  },
];

function App() {
  const [apartments, setApartments] = useState(
    JSON.parse(localStorage.getItem('apartments')) || initialState
  );

  const [currentRent, setCurrentRent] = useState(
    JSON.parse(localStorage.getItem('currentRent')) || [
      {
        id: '1',
        name: 'Market square apartments 1',
        rooms: 1,
        price: 10,
        description: 'some description',
      },
    ]
  );

  // (local storage)
  useEffect(() => {
    localStorage.setItem('apartments', JSON.stringify(apartments));
    localStorage.setItem('currentRent', JSON.stringify(currentRent));
  }, [apartments, currentRent]);

  // Cancel Rent
  const cancelSubmit = (id) => {
    setCurrentRent(currentRent.filter((apt) => apt.id !== id));
  };
  // console.log(apartments);

  // Rent Apartment
  const rentApt = (apt) => {
    if (!currentRent.some((el) => el.id === apt.id)) {
      setCurrentRent([...currentRent, apt]);
    }
  };

  const [aptsCounter, setAptsCounter] = useState(apartments.length);

  // Add Apartment
  const addApt = (apt) => {
    const id = '' + Date.now();

    const newApt = {
      id,
      ...apt,
    };

    setAptsCounter((prev) => prev + 1);
    setApartments([...apartments, newApt]);
  };

  // Delete Apartment
  const deleteApt = (id) => {
    setApartments(apartments.filter((apt) => apt.id !== id));
    setAptsCounter((prev) => prev - 1);
  };

  //! Sort by price
  const [sortType, setSortType] = useState('default');

  //! Filter by rooms
  const [filterValue, setFilterValue] = useState('default');

  return (
    <div className='App'>
      <h1>Apartments Marketplace</h1>
      <AddApartment onAdd={addApt} />
      <CurrentRents currentRent={currentRent} onCancelSubmit={cancelSubmit} />
      <SortPanel
        aptsCounter={aptsCounter}
        onFilter={setFilterValue}
        setSortType={setSortType}
      />
      <Apartments
        apartments={apartments}
        onDelete={deleteApt}
        onRent={rentApt}
        sortType={sortType}
        filterValue={filterValue}
      />
    </div>
  );
}

export default App;
