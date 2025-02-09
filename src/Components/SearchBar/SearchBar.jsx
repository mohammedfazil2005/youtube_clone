import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({search,setSearch}) => {
    const [input,setInput]=useState(search)
    const onChangeInput=(value)=>{
        setInput(value.toLowerCase())
    }
    const onClickHandleSearch=()=>{
        setSearch(input.toLowerCase())
    }
  
    return (
        <div className='search-parent sticky-top'>
            <div className="searchBar-parent">
                <input className="" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>onChangeInput(e.target.value)} />
                <button id='searchbutton' onClick={onClickHandleSearch} type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

        </div>
    )
}

export default SearchBar
