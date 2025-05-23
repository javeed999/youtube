import {useNavigate} from "react-router-dom"
import "./index.css"
import { formatDistanceToNow } from "date-fns";
import {useContext} from "react"
import ColorContext from "../ColorContext.jsx"

const TrendingSingleItem=(props)=>{
    const {color}=props
    const {item,fireHeading}=props
    const fireHeadingBlackjav=color==="white"?"fireParaBlack":"fireParaWhite"
    const navigate=useNavigate()
    const printCurrentId=(id)=>{
  
        navigate(`/${id}`); 
        console.log("hello")
      
      }
    return (
        <div className="trending-single-block" onClick={()=>printCurrentId(item.id)}>
                <img src={item.thumbnailUrl} className="single-trend-image-8"  />
            <div className="image-right-side"> 
            <p className={fireHeading}>{item.title}</p>
            <p className={fireHeadingBlackjav}> {item.channel.name}</p>
            <p className={fireHeadingBlackjav}>{item.viewCount} . {formatDistanceToNow(new Date(item.publishedAt))}</p>
            <p></p>
            </div>
        </div>
    )


}


export default TrendingSingleItem