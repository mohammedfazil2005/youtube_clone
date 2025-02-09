
import { useState } from 'react'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/HomePage/Home'
import { Route, Routes } from 'react-router-dom'
import VideoPlayer from './Components/videoPlayer/VideoPlayer'

function App() {
  const [category,setCategory]=useState(0)
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route element={<Home category={category} setCategory={setCategory}/>} path='/'></Route>
      <Route element={<VideoPlayer/>} path='/video/:categoryId/:VideoId'></Route>
    </Routes>

    
    </>
  )
}

export default App
