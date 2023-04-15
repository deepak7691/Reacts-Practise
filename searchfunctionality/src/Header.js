import React from 'react';

const Header = ({ search, handleInput }) => {
  return (
    <div>
      <input type='text' value={search} onChange={handleInput} />
    </div>
  )
}

export default Header;
