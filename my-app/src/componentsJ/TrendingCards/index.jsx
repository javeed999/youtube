import {useContext} from "react"
import "./index.css"
import Header from "../Header/index.jsx"
import Rightcontainer from "../Rightcontainer/index.jsx"
import ColorContext from "../ColorContext.jsx"
import TrendingItems from "../TrendingItems/index.jsx"
const TrendingVideosContainer=()=>{
    const {color}=useContext(ColorContext)
    const classApply=color==="white"? "applyWhite" :"applyBlack"

    return (
        <div className={`trending-full-width-cobver  ${classApply}`}>
       <div className="trending-right-container-jav">
        <Header />
        <div className="middle-container-left-premium">
        <Rightcontainer selectLink="Trending"/>
    <TrendingItems />
        </div>
       </div>
        </div>
    )
}

const renderTrendingVideos=(props)=>{
    const {item}=props
    const dateAns=formatDistanceToNow(new Date(item.publishedAt))
    return (
        <div className={`trending-container `}>
            {/* <Header /> */}
            <div>
                <img src={item.thumbnailUrl} className="trending-image-1" alt={item.title} />
            </div>
            <div className="trending-card-description">
                <span className="trending-span">{item.title}</span><br />
                <span className="trending-span">{item.channel.name}</span><br />
                <span className="trending-span">{item.viewCount} Views.  {dateAns}</span>
                <span></span>

            </div>
           
        </div>
    )
}

export default TrendingVideosContainer