import { useEffect, useState, useContext } from "react";
import "./index.css";
import Cookies from "js-cookie";
import PremiumContext from "../ProviderComponent.jsx";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import ColorContext from "../ColorContext.jsx";
import  Loader  from "../Loader.jsx";

const VideosListContainer = (props) => {

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);
  const jwtToken = Cookies.get("jwtToken");
  const [videosList, setVideosList] = useState([]);
  const { visible, togglePremium } = useContext(PremiumContext);
  const { color, changeTheme } = useContext(ColorContext);
  const navigate = useNavigate();


  const printCurrentId=(id)=>{
  
    navigate(`/${id}`); 
  
  }
  const CreateVideoList = ({ item, color }) => {
    return (
      <div className={`item-container ${color === "white" ? "" : "changeColorTowhite"}`} onClick={()=>printCurrentId(item.id)}>
        <img src={item.thumbnailUrl} className="thumbnail" />
        <div className="item-bottom">
          <img src={item.channel.profile_image_url} className="profile-image" />
          <p className="item-title">{item.title}</p>
        </div>
        <p className="channel-name">{item.channel.name}</p>
        <div className="view-count-container">
          <span className="item-viewCount">{item.viewCount} Views</span>
        </div>
      </div>
    );
  };

  const changeUserInput = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${userInput}`;

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

        const updatedDate = data.videos.map((eachItem) => ({
          id: eachItem.id,
          channel: eachItem.channel,
          publishedAt: eachItem.published_at,
          thumbnailUrl: eachItem.thumbnail_url,
          title: eachItem.title,
          viewCount: eachItem.view_count,
        }));

        setLoading(false);
        setVideosList(updatedDate);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getApiProfile();
  }, [userInput]);

  const resetUserInput=()=>{
    setUserInput("")
  }
  const RenderVideos=()=>{
    if(videosList.length===0)
        return (
          <div className="videos-not-found">
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" className="not-videos-displaying" />
            <button type="button" className="videos-not-found-button" onClick={resetUserInput}  >Retry</button>
          </div>
        )
      else 
        return ( videosList.map((eachItem) => <CreateVideoList key={eachItem.id} item={eachItem} color={color} />)      )
  }

  const iconBackGround = color === "white" ? "white" : "black";

  const styleNew = { color: iconBackGround, padding: "0px", borderRadius: "50%" };
  return (
    <div className={`videos-list-container ${visible ? "" : "moveUp"} ${color === "white" ? "" : "changeBackGroundColor"}`}>
      <div className="input-container">
        <input type="search" className="input-search" onChange={changeUserInput} value={userInput} />
        <CiSearch size={26} style={styleNew} />
      </div>

      {loading ? (
             <div className="loader-container-card-item">   <Loader color="#00ff00" height={60} width={60} /></div>

      ) : (
        <RenderVideos />
      )}
    </div>
  );
};






export default VideosListContainer;
