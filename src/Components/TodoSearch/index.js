import React from 'react';
import { TodoContext } from '../../TodoContext';
import { FcSearch } from 'react-icons/fc';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);


  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);  
  };
  
  
  return (
    <input 
      className="TodoSearch" 
      placeholder="🔍  Search"
      value={searchValue} 
      onChange={onSearchValueChange}
    />

    );
}

export { TodoSearch };
