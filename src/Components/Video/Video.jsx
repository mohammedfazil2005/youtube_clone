import React, { useEffect, useState } from 'react'
import './Video.css'
import { apiKey, valueConverter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Video = () => {
   const [data,setData]=useState(null)
   const [channelDetails,setChannelDetails]=useState(null)
   const [comments,setComments]=useState([])
   const [subscribed,setSubscribed]=useState('notSubscribed')
   const {VideoId}=useParams()

   const fetchData=async()=>{
   try {
    const Baseurl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${VideoId}&key=${apiKey}`
    const serverRespponce=await fetch(Baseurl)
    const serverData=await serverRespponce.json()
    setData(serverData.items[0])

   } catch (error) {
    console.log(error)
   }

   }

   const fetchChannelData=async()=>{

    try {
        const baseUrl=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${apiKey}`
        const serverResponce=await fetch(baseUrl)
        const serverData=await serverResponce.json()
        setChannelDetails(serverData.items[0])
    } catch (error) {
        console.log(error)
    }
   }

  const fetchComments=async()=>{
    try {
        const baseUrl=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=32&videoId=${VideoId}&key=${apiKey}`
        const serverResponce=await fetch(baseUrl)
        const serverData=await serverResponce.json()
        setComments(serverData.items)
    } catch (error) {
        console.log(error)
    }
 
  }

  const subscribeButton=()=>{
    if(subscribed=="Subscribed"){
        setSubscribed("Unsubscribed")
    }else{
        setSubscribed("Subscribed")
    }
  }
   



   useEffect(()=>{
    fetchData()
    fetchComments()
    
    
   },[VideoId])

   useEffect(()=>{
    if(data){
       
        fetchChannelData()    
    }

   },[data])
    
  return (
    <div>
      <div className="video-parent-div">
      {data&&channelDetails&&(
        <>
        <div className="video-main">
            <iframe  src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
           
            <div className="heading">
            <h1>{data.snippet.title}</h1>
        </div>
        <div className="channel-details">
            <div className="channel-det">
                <img src={channelDetails.snippet.thumbnails.default.url} alt="" />
                <div>
                    <h5>{data.snippet.channelTitle}</h5>
                    <p>{valueConverter(channelDetails.statistics.subscriberCount)} Subscribers</p>
                </div>
                <button onClick={subscribeButton} style={subscribed=="Subscribed"?{backgroundColor:"rgba(0, 0, 0, 0.499)"}:{backgroundColor:"black"}}>{subscribed=="Subscribed"?"UnSubscribe":"Subscribe"}</button>
            </div>
            <div className="channel-promotion">
                <button><i className="fa-regular fa-thumbs-up"></i>{valueConverter(data.statistics.likeCount)}</button>
                <button><i className="fa-regular fa-thumbs-down"></i></button>
                <button><i className="fa-solid fa-share"></i> Share</button>
                <button><i className="fa-solid fa-download"></i>Download</button>
                <button><i className="fa-solid fa-ellipsis"></i></button>
            </div>
            </div>
            <div className="video-details">
                <div className="views-time">
                    <p>{valueConverter(data.statistics.viewCount)} views</p>
                    <p>{moment(data.statistics.publishedAt).fromNow()}</p>
                </div>
                <h6>{data.snippet.description.slice(0,150)}...</h6>
            </div>
            <div className="comments-div">
                <h1>{valueConverter(data.statistics.commentCount)} comments</h1>
                {comments&&
                comments.map((a)=>(
                    <div className='comment-details' key={a.id}>
                    <div className="comment-dp">
                        <img src={a.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="Profile" loading='lazy' />
                    </div>
                    <div className="comment">
                        <div>
                        <div className="comment-name-time">
                            <h2>{a.snippet.topLevelComment.snippet.authorDisplayName}</h2>
                            <p>{moment(a.snippet.topLevelComment.snippet.publishedAt).fromNow()}</p>
                        </div>
                        <p>{a.snippet.topLevelComment.snippet.textDisplay.slice(0,100)}</p>
                        <div className="comment-like">
                         <button> <i className="fa-regular fa-thumbs-up me-2"></i>{valueConverter(a.snippet.topLevelComment.snippet.likeCount)}</button>
                         <button><i className="fa-regular fa-thumbs-down"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
               ))}
            </div>
           </>
        )}
        
      </div>
    </div>
  )
}

export default Video
