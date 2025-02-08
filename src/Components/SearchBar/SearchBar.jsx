import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className='search-parent sticky-top'>
            <div className="searchBar-parent">
                <input className="" type="search" placeholder="  Search" aria-label="Search" />
                <button id='searchbutton' type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>
    )
}

export default SearchBar
