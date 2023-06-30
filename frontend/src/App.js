import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import Apartments from './components/Apartments'
import ApartmentForm from './components/ApartmentForm/ApartmentForm'
import SortPanel from './components/SortPanel/SortPanel'
import CurrentRents from './components/CurrentRents'

function App() {
  // const [aptsCounter, setAptsCounter] = useState(apartments.length)

  // Add Apartment
  // const addApt = (apt) => {
  //   const id = '' + Date.now()

  //   const newApt = {
  //     id,
  //     ...apt,
  //   }

  //   setAptsCounter((prev) => prev + 1)
  //   setApartments([...apartments, newApt])
  // }

  // // Delete Apartment
  // const deleteApt = (id) => {
  //   setApartments(apartments.filter((apt) => apt.id !== id))
  //   setAptsCounter((prev) => prev - 1)
  // }

  // // Sort by price
  // const [sortType, setSortType] = useState('default')

  // // Filter by rooms
  // const [filterValue, setFilterValue] = useState('default')

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* <SortPanel
          aptsCounter={aptsCounter}
          onFilter={setFilterValue}
          setSortType={setSortType}
        /> */}
        {/* <Apartments
          apartments={apartments}
          onDelete={deleteApt}
          onRent={rentApt}
          sortType={sortType}
          filterValue={filterValue}
        /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
