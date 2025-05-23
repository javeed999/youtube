import "./index.css"
import Header from "../Header/index.jsx"
import Rightcontainer from "../Rightcontainer/index.jsx"
import { useParams } from "react-router-dom"
import {useState,useEffect,useContext} from "react"
import Cookies from "js-cookie"
import ColorContext from "../ColorContext.jsx"
import React from 'react'
import  Loader  from "../Loader.jsx";
import ReactPlayer from 'react-player'
import { FaThumbsUp, FaThumbsDown, FaRegBookmark } from "react-icons/fa";
import VideosContext from "../SavedVidoes.jsx"
const CardFullDetails=(props)=>{
    const jwtToken=Cookies.get("jwtToken")
    const {color}=useContext(ColorContext)
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    const {id}=useParams()
    useEffect(()=>{
        const getApiDetails=async()=>{
            if(jwtToken===undefined)
                return 
            const url=`https://apis.ccbp.in/videos/${id}`
            const options={
                method:"GET",
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            }
            const response=await fetch(url,options)
            if(response.ok)
            {
                const data=await response.json()
                let updatedData=data.video_details
                updatedData={
                    channel:updatedData.channel,
                    description:updatedData.description,
                    id:updatedData.id,
                    publishedAt:updatedData.published_at,
                    thumbnailUrl:updatedData.thumbnail_url,
                    title:updatedData.title,
                    videoUrl:updatedData.video_url,
                    viewCount:updatedData.view_count
                }
                setLoading(false)
                setData(updatedData)
            }
            else 
            {
                console.log("error")
            }
        
        }
        getApiDetails()

    },[])

    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);
    const [saveActive, setSaveActive] = useState(false);

    const toggleLike = () => {
        if (!likeActive) {
            setLikeActive(true);
            setDislikeActive(false); // Disable dislike if like is selected
        } else {
            setLikeActive(false);
        }
    };

    const toggleDislike = () => {
        if (!dislikeActive) {
            setDislikeActive(true);
            setLikeActive(false); // Disable like if dislike is selected
        } else {
            setDislikeActive(false);
        }
    };

    const toggleSave = () => {
        const savedVideos = JSON.parse(localStorage.getItem("savedVideos")) || [];
    
        if (!saveActive) {
            // Add video to saved list if not already saved
            if (!savedVideos.some(video => video.id === data.id)) {
                savedVideos.push(data);
                localStorage.setItem("savedVideos", JSON.stringify(savedVideos));
            }
        } else {
            // Remove video from saved list
            const updatedVideos = savedVideos.filter(video => video.id !== data.id);
            localStorage.setItem("savedVideos", JSON.stringify(updatedVideos));
        }
    
        setSaveActive(!saveActive);
    };
    

    const RenderVideoDetails = () => {
        if(loading){
            return (
               <h1></h1>
            )
        }
        return (
            <div className="video-details">
                <h2 className={`video-title ${color==="white"?"applyDarkFontTitle":"applyWhiteFontTitle"}`}>{data.title}</h2>
                <p className={`video-description ${color==="white"?"applyDarkFontDesc":"applyWhiteFontDesc"}`}>{data.description}</p>
                <div className="video-like-button">
                <p className={`video-stats ${color==="white"?"applyDarkFontDesc":"applyWhiteFontDesc"}`}>{data.viewCount} views • {data.publishedAt}</p>
                <div className={`video-actions ${color==="white"?"applyDarkFontDesc":"applyWhiteFontDesc"}`}>
            <button 
                className={`icon-button ${likeActive ? "active" : ""}`} 
                onClick={toggleLike}
            >
                <FaThumbsUp /> Like
            </button>
            <button 
                className={`icon-button ${dislikeActive ? "active" : ""} `} 
                onClick={toggleDislike}
            >
                <FaThumbsDown /> Dislike
            </button>
            <button 
                className={`icon-button ${saveActive ? "active" : ""}`} 
                onClick={toggleSave}
            >
                <FaRegBookmark /> Save
            </button>
        </div>
                        </div>                
                <hr class="seperator"/>
                <div className="channel-info">
                    <img src={data.channel.profile_image_url} alt={data.channel.name} className="channel-logo" />
                    <p className="channel-name">{data.channel.name}</p>
                </div>
            </div>
        );
    };
    
    

    return (
        <div className={`${color==="white"?"":"applyBlack"}`}>
        <Header />
        <div className="middle-container-left-premium">
        <Rightcontainer selectLink=""/>
        <div className={`video-container ${color==="white"?"":"applyDarkShade"}`}>
        <>
         {  loading ?(
            <div className="loader-container-card-item">   <Loader color="red" height={60} width={60} /></div>
         )
            :( 
            <ReactPlayer 
            url={data.videoUrl} 
            controls={true} 
            width="1050px"
            height="500px"
            className="video-plays-on"
        />)
            }
            </>
       
        
        <div>
           <RenderVideoDetails />
        </div>
    </div>

        </div>

        </div>

    )
}

export default CardFullDetails