import React, { useEffect, useState } from 'react'
import './Suggestions.css'
import { apiKey, valueConverter } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Suggestions = ({categoryId}) => {
    const [data,setData]=useState(null)
    const fetchSuggestions=async()=>{
        const baseUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=11&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`
        const serverResponce=await fetch(baseUrl)
        const serverData=await serverResponce.json()
        setData(serverData.items)
    }
    console.log('sug',data)
    useEffect(()=>{
        fetchSuggestions()
    },[apiKey])
  return (
    <div>
     <div className="suggestions-div-parent">
       {data&&(
         data.map((a)=>(
            <Link to={`/video/${a.snippet.categoryId}/${a.id}`}>
            <div className="suggestion-video">
            <div className='suggestion-thumbnail'>
                <img src={a.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className='suggestion-details'>
                <div className="suggestion-title">
                    <h2>{a.snippet.title.slice(0,30)}</h2>
                    <button><i className="fa-solid fa-ellipsis"></i></button>
                </div>
                <p>{a.snippet.channelTitle}</p>
                <div className="suggestions-view-count">
                    <p>{valueConverter(a.statistics.viewCount)} views</p>
                    <p>{moment(a.snippet.publishedAt).fromNow()}</p>
                </div>
            </div>
        </div>
        </Link>
        ))
       )}
     </div>
    </div>
  )
}

export default Suggestions
