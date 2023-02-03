import {useEffect, useState} from 'react';
import './App.css';
import Apartments from './components/Apartments';
import AddApartment from './components/AddApartment';
import SortPanel from './components/SortPanel';
import CurrentRents from './components/CurrentRents';

function App() {
  const [apartments, setApartments] = useState([
    {
      id: 1,
      name: 'Market square apartments 1',
      rooms: 1,
      days: 1,
      price: 10,
      description: 'some description',
    },
    {
      id: 2,
      name: 'Market square apartments 2',
      rooms: 2,
      days: 2,
      price: 20,
      description: 'some description',
    },
    {
      id: 3,
      name: 'Market square apartments 3',
      rooms: 3,
      days: 3,
      price: 30,
      description: 'some description',
    },
  ]);

  const [currentRent, setCurrentRent] = useState([
    {
      id: 1,
      name: 'Market square apartments 1',
      rooms: 1,
      days: 1,
      price: 10,
    },
  ]);

  // TODO (local storage)
  // useEffect(() => {
  //   localStorage.setItem('score', score);
  // }, [score]);

  //! Cancel Rent
  const cancelSubmit = (id) => {
    setCurrentRent(currentRent.filter((apt) => apt.id !== id));
  };
  console.log(currentRent);

  //! Rent Apartment
  const rentApt = (apt) => {
    if (!currentRent.some((el) => el.id === apt.id)) {
      setCurrentRent([...currentRent, apt]);
    }
  };

  const [aptsCounter, setAptsCounter] = useState(apartments.length);

  //! Add Apartment
  const addApt = (apt) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newApt = {
      id,
      ...apt,
    };
    console.log(newApt);

    //TODO (local storage)
    // setScore((prev) => prev + 1);

    // update number of Apts
    setAptsCounter((prev) => prev + 1);
    setApartments([...apartments, newApt]);
  };

  //! Delete Apartment
  const deleteApt = (id) => {
    setApartments(apartments.filter((apt) => apt.id !== id));
    // update number of Apts
    setAptsCounter((prev) => prev - 1);
  };

  return (
    <div className='App'>
      <h1>Apartments Marketplace</h1>
      <AddApartment onAdd={addApt} />
      <CurrentRents currentRent={currentRent} onCancelSubmit={cancelSubmit} />
      <SortPanel aptsCounter={aptsCounter} />
      <Apartments
        apartments={apartments}
        onDelete={deleteApt}
        onRent={rentApt}
      />
    </div>
  );
}

export default App;
