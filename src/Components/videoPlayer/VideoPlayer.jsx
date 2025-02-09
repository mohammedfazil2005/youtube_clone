import React from 'react'
import Video from '../Video/Video'
import Suggestions from '../Suggestions.jsx/Suggestions'
import './VideoPlayer.css'
import { useParams } from 'react-router-dom'

const VideoPlayer = () => {
  const {VideoId,categoryId}=useParams()

  return (
    <div className='videoplayer-parent'>
      <Video VideoId={VideoId}/>
      <Suggestions categoryId={categoryId}/>
    </div>
  )
}

export default VideoPlayer
