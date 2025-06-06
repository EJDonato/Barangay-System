import React, { useState } from 'react';

import "./search_bar.css"

function SearchBar() {
    return (
        <div className='search-bar-container'>
            <input className="search-input" type="text" placeholder='Enter name'/>
        </div>
    )

};

export default SearchBar;