import {useState,useEffect, useContext} from "react"
import "./index.css"
import { ImFire } from "react-icons/im";
import Cookies from "js-cookie"
import TrendingSingleItem from "../TrendingSingleItem/index.jsx"
import ColorContext from "../ColorContext.jsx"
import  Loader  from "../Loader.jsx";

const TrendingItems=()=>{
    const styleIcon={padding:"0px"}
    const {color}=useContext(ColorContext)
    const [trendingVideos,setTrendingVideos]=useState([])
    const [loading,setLoading]=useState(true)
const jwtToken=Cookies.get("jwtToken")
    useEffect(() => {
        const getApiProfile = async () => {
            const apiUrl="https://apis.ccbp.in/videos/trending"
            if (!jwtToken) {
                console.error("JWT Token is missing!");
                return;
              }
    
            const options = {
              headers: {
                Authorization: `Bearer ${jwtToken}`,
              },
              method: "GET",
            };
            try {
              const response = await fetch(apiUrl, options);
              if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
              const data = await response.json();
              const updatedDate = data.videos.map((eachItem) => ({
                  id: eachItem.id,
                  channel: eachItem.channel,
                  publishedAt: eachItem.published_at,
                  thumbnailUrl: eachItem.thumbnail_url,
                  title: eachItem.title,
                  viewCount: eachItem.view_count,
                }));
                setLoading(false)
              setTrendingVideos (updatedDate)
            } catch (error) {
              console.error("Error fetching profile:", error);
            }
          };
          getApiProfile();
    }, []);





const fireHeading=color==="white"?"FireHeading-Black":"FireHeading-White";
    return (
        <div className="trending-items-display-25g">
            
            <div className="name-and-fire">
            <div className="fire-icon"><ImFire size="30" color="red" style={styleIcon} /></div>
            <div><h1 className={`fire-heading ${fireHeading}`}>This is Trending Items</h1></div>
            </div>
            {
                !loading? (trendingVideos.map(eachItem=> <TrendingSingleItem color={color}  fireHeading={fireHeading} key={eachItem.id} item={eachItem}/>)
            ) :(      <div className="Loader" ><Loader color="#00ff00" height={60} width={60} /> </div>
            ) 
            }
        </div>
    )

}

export default TrendingItems