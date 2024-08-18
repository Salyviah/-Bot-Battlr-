import React, { useState } from 'react';

function SortBar(props) {
  const [sortBy, setSortBy] = useState('health'); // Default sort by health

  const handleChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
    // Pass the selected sort by value to the parent component
    props.onSortChange(selectedSortBy);
  };

  return (
    <>
    <h2>Sort By</h2>
    <div className="sort-bar">
      <select className='the-bar' value={sortBy} onChange={handleChange}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
    </>
  );
}
export default SortBar;
