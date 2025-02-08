import React, { useEffect, useState } from 'react'
import './DisplayVideo.css'
import { apiKey } from '../../data'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
const DisplayVideo = ({category,setCategory}) => {

    const [videos,setVideos]=useState([])

    const fetchVideos=async()=>{
        const serverResponce=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${category}&key=${apiKey}`)
        const data=await serverResponce.json()
        setVideos(data.items)
    }
   
    
    const valueConverter=(value)=>{
        if(value>1000000){
            return Math.floor(value/1000000)+"M"
        }else if(value>=1000){
            return Math.floor(value/1000)+"K"
        }else{
            return value
        }
    }
  

    useEffect(()=>{
        fetchVideos()
    },[category])


  return (
    <div className='display-video-main'>
        <div className="display-video-parent">
         {videos.map((video)=>(
           <Link to={`/video/10/40`}>   <div className="video-box">
              <div>
                  <img src={video.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div>
                  <h1>{video.snippet.title}</h1>
                  <p>{video.snippet.channelTitle}</p>
                  <div className='video-det'>
                      <p>{valueConverter(video.statistics.viewCount)} views</p>
                      <p>{moment(video.snippet.publishedAt).fromNow()}</p>
                  </div>
              </div>
             </div>
             </Link>
         ))}
        </div>
    </div>
  )
}

export default DisplayVideo
