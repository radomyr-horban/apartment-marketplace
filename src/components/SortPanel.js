import React, {useState} from 'react';

function SortPanel(props) {
  // const [sorted, setSorted] = useState(true);
  // const handleChange = (e) => {
  //   setSorted(e.target.value);
  // };
  // console.log(sorted);

  return (
    <>
      <div className='sort-panel'>
        <h2>🏡 Available Apartments ({props.aptsCounter})</h2>
        <div>
          <label>Sort by:</label>
          <select
            name='price'
            id='price'
            // value={sorted}
            // onChange={handleChange}
          >
            <option value='low-to-high'>Price: Lowest First</option>
            <option value='high-to-low'>Price: Highest First</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SortPanel;
