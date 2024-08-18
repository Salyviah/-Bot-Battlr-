import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleClassChange = (event) => {
    const newClasses = [...selectedClasses];
    if (event.target.checked) {
      newClasses.push(event.target.value);
    } else {
      const index = newClasses.indexOf(event.target.value);
      newClasses.splice(index, 1);
    }
    setSelectedClasses(newClasses);
    onFilterChange(newClasses);
  };

  return (
    <div className="filter-bar">
      <h2>Filter by Class</h2>
      <label>
        <input type="checkbox" value="Support" checked={selectedClasses.includes('Support')} onChange={handleClassChange} /> Support
      </label>
      <label>
        <input type="checkbox" value="Medic" checked={selectedClasses.includes('Medic')} onChange={handleClassChange} /> Medic
      </label>
      <label>
        <input type="checkbox" value="Assault" checked={selectedClasses.includes('Assault')} onChange={handleClassChange} /> Assault
      </label>
      <label>
        <input type="checkbox" value="Defender" checked={selectedClasses.includes('Defender')} onChange={handleClassChange} /> Defender
      </label>
      <label>
        <input type="checkbox" value="Captain" checked={selectedClasses.includes('Captain')} onChange={handleClassChange} /> Captain
      </label>
      <label>
        <input type="checkbox" value="Witch" checked={selectedClasses.includes('Witch')} onChange={handleClassChange} /> Witch
      </label>
    </div>
  );
};

export default FilterBar;