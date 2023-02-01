import React, {useState} from 'react';

function SortPanel(props) {
  return (
    <>
      <div className='sort-panel'>
        <h2>🏡 Available Apartments ({props.numOfApts})</h2>
        <div>
          <label>Sort by:</label>
          <select name='price' id='price'>
            <option value='low-to-high'>Price: Lowest First</option>
            <option value='high-to-low'>Price: Highest First</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SortPanel;
