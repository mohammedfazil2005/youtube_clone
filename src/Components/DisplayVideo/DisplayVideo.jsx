import React, { useEffect, useState } from 'react'
import './DisplayVideo.css'
import { apiKey, valueConverter } from '../../data'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const DisplayVideo = ({category,setCategory,search}) => {

    const [videos,setVideos]=useState([])

    const fetchVideos=async()=>{
       try {
        let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&videoCategoryId=${category}&key=${apiKey}`

        if(search.length>0){
            url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=60&q=${search}&type=video&key=${apiKey}`
        }
        const serverResponce=await fetch(url)
        const data=await serverResponce.json()
        if(!data.items){
            setVideos([])
        }else{
            setVideos(data.items)
        }
        
       } catch (error) {
        console.log(error)
        setVideos([])
       }
    }
   
    console.log(search)
    
  
    useEffect(()=>{
        fetchVideos()
    },[category,search])


  return (
    <div className='display-video-main'>
        <div className="display-video-parent">
         {videos.length==0?
        <CircularProgress />:
        videos.map((video)=>{
            const videoId = video.id.videoId || video.id; 
            const categoryId = video.snippet?.categoryId || category;

            return(
                <Link to={`/video/${categoryId}/${videoId}`} key={video.id}>   <div className="video-box">
                <div>
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div>
                    <h1>{video.snippet.title}</h1>
                    <p>{video.snippet.channelTitle}</p>
                    <div className='video-det'>
                        <p>{video.statistics?.viewCount? valueConverter(video.statistics.viewCount) +' views' : 'Views not available'}</p>
                        <p>{moment(video.snippet.publishedAt).fromNow()}</p>
                    </div>
                </div>
               </div>
               </Link>
            )
           
        }) 
        }
        </div>
    </div>
  )
}

export default DisplayVideo
