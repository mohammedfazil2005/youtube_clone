import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import DisplayVideo from '../DisplayVideo/DisplayVideo'
import SearchBar from '../SearchBar/SearchBar'


const Home = ({category,setCategory}) => {
  const [search,setSearch]=useState('')
    
  return (
    <div>
        <SearchBar search={search} setSearch={setSearch} />
      <div className='content-div'>
        <SideBar category={category} setCategory={setCategory}/>
        <DisplayVideo category={category} setCategory={setCategory} search={search}/>
      </div>
    </div>
  )
}

export default Home
