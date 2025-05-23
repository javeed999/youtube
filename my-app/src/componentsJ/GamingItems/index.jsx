import React,{useState,useEffect,useContext} from "react"
import "./index.css"
import Cookies from "js-cookie"
import  Loader  from "../Loader.jsx";
import ColorContext from "../ColorContext.jsx"
import { useNavigate } from "react-router-dom";

const GamingItems=()=>{
const jwtToken=Cookies.get("jwtToken")
const [data,setData]=useState([])
const [loading,setLoading]=useState(true)
const {color}=useContext(ColorContext)
    useEffect(() => {
        const apiUrl = `https://apis.ccbp.in/videos/gaming`;
    
        if (!jwtToken) {
          console.error("JWT Token is missing!");
          return;
        }
        const getApiProfile = async () => {
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
            const updatedData=data.videos.map(eachItem =>({
                id:eachItem.id,
                title:eachItem.title,
                thumbnailUrl:eachItem.thumbnail_url,
                viewCount:eachItem.view_count
            }))
           
            setLoading(false);
            setData(updatedData);
          } catch (error) {
            console.error("Error fetching profile:", error);
          }
        };
    
        getApiProfile();
      }, []);

      const fireHeadingBlackjav=color==="white"?"fireParaBlack":"fireParaWhite"
      const navigate = useNavigate();

      const printCurrentId=(id)=>{
  
        navigate(`/${id}`); 
        console.log("hello")
      
      }
      const RenderSingleCard=(props)=>{
        const {item}=props
        return (
                <div className={`gaming-single-card `} onClick={()=>printCurrentId(item.id)}>
                    <img src={item.thumbnailUrl} alt={item.title} className="gaming-card-imager" />
                    <h1 className={`light-white-text ${fireHeadingBlackjav}`}>{item.title}</h1>
                    <p className={`light-black-text ${fireHeadingBlackjav}`}>{item.viewCount} Watching WorldWide</p>
                </div>
        )
      }


      const RenderGamingItems=()=>{
        return (
            
                loading ?  (<div className="loader-container-card-item">   <Loader color="#00ff00" height={60} width={60} /></div>)
                    : (data.map(eachItem => <RenderSingleCard key={eachItem.id} item={eachItem}/>))
            
        )
      }
      const fireHeading=color==="white"?"FireHeading-Black":"FireHeading-White";


    return (
        <div className={`gaming-full-container ${fireHeading}`}>
            <h1>This is Gaming Cards</h1><br />
           <div className="gaming-all-cards">
           <RenderGamingItems />
           </div>
        </div>
    )

}

export default GamingItems 

// {
//     loading? (<div className="loader-container-card-item">   <Loader color="#00ff00" height={60} width={60} /></div>)
//     : (
//         {data.map(eachItem=> <RedRenderGamingItems />) }  )   
// }