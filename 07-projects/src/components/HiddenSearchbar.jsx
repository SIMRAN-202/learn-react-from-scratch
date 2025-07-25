import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HiddenSearchbar = () => {
  const [showInput, setShowInput] = useState(false);

  const handleInputClick = (e) => {
    e.stopPropagation(); 
  };

  const handleSectionClick = () => {
    if (showInput) {
      setShowInput(false); 
    }
  };

  const handleIconClick = (e) => {
    e.stopPropagation(); 
    setShowInput(true);
  };

  return (
    <div
      className=" bg-blue-200 p-8"
      onClick={handleSectionClick} 
    >
      <div
        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {showInput ? (
          <input
            type="text"
            placeholder="Search..."
            className="outline-none"
            onClick={handleInputClick}
          />
        ) : (
          <FaSearch onClick={handleIconClick} />
        )}
      </div>
    </div>
  );
};

export default HiddenSearchbar;
