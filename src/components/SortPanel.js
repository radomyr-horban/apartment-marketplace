import React, {useState} from 'react';

function SortPanel({aptsCounter, setSortType, onFilter}) {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  return (
    <>
      <div className='sort-panel'>
        <h2>🏡 Available Apartments ({aptsCounter})</h2>

        <div>
          <label htmlFor='rooms'>Rooms</label>
          <select name='rooms' id='rooms' onChange={(e) => handleFilter(e)}>
            <option value='default'>Show all</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>

        <div>
          <label>Sort by:</label>
          <select name='price' id='price' onChange={(e) => handleSort(e)}>
            <option value='default'>Default</option>
            <option value='low-to-high'>Price: Lowest First</option>
            <option value='high-to-low'>Price: Highest First</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SortPanel;
