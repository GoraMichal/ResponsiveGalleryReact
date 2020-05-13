import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa2 ba b-dark bg-washed-red'
                type='search'
                placeholder='szukaj obrazu' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;