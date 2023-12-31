import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa3'>
        <input
        className='pa3 br3 ba b--dark-blue bg-lightest-blue' 
        type='search' 
        placeholder='Search Mascots' 
        onChange = {searchChange}
        />
        </div>    
    );
}

export default SearchBox;