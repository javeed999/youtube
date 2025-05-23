import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ColorContext from "../ColorContext.jsx";
import "./index.css"; // Add styles for saved video cards
import Header from "../Header/index.jsx"
import Rightcontainer from "../Rightcontainer/index.jsx"
const SavedVideos = () => {
    const { color } = useContext(ColorContext);
    const [savedVideos, setSavedVideos] = useState([]);

    useEffect(() => {
        const storedVideos = JSON.parse(localStorage.getItem("savedVideos")) || [];
        setSavedVideos(storedVideos);
    }, []);
    const classApply=color==="white"? "applyWhite" :"applyBlack"
    const fireHeadingBlackjav=color==="white"?"saved-black":"saved-white"

    return (
        <div className={`${classApply}`}>
        <Header />
       <div className="saved-container-right-saved-videos">
       <Rightcontainer />
        <div className={`saved-videos-page ${color === "white" ? "" : "applyBlack"}`}>
            <h1 className={`page-title ${fireHeadingBlackjav}`}>Saved Videos</h1>
            {savedVideos.length === 0 ? (
                <p className="no-saved-message">No saved videos</p>
            ) : (
                <div className={`saved-videos-container ${fireHeadingBlackjav}`}>
                    {savedVideos.map((video) => (
                        <Link to={`/video/${video.id}`} key={video.id} className="saved-video-card">
                            <img src={video.thumbnailUrl} alt={video.title} className="saved-video-thumbnail" />
                            <div className="saved-video-info">
                                <h3 className={`video-title ${color === "white" ? "applyDarkFontTitle" : "applyWhiteFontTitle"}`}>
                                    {video.title}
                                </h3>
                                <p className="video-stats">{video.viewCount} views • {video.publishedAt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
       </div>
        </div>
    );
};

export default SavedVideos;
