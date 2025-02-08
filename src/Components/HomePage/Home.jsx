import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import DisplayVideo from '../DisplayVideo/DisplayVideo'
import SearchBar from '../SearchBar/SearchBar'


const Home = ({category,setCategory}) => {
    
  return (
    <div>
        <SearchBar/>
      <div className='content-div'>
        <SideBar category={category} setCategory={setCategory}/>
        <DisplayVideo category={category} setCategory={setCategory}/>
      </div>
    </div>
  )
}

export default Home
