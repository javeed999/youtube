import {useState,useContext} from "react"
import "./index.css"
import { IoCloseOutline } from "react-icons/io5";
import PremiumContext from "../ProviderComponent.jsx"
const Premiumcontainer =(props)=>{

    const { visible, togglePremium } = useContext(PremiumContext); // Use Context

    const {statusColor,activeName}=props
    console.log(statusColor)
    const imageUrl=statusbar==="white" ?"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" :"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
    const toggleVisible=()=>{
        togglePremium(!visible)
    }
   if(visible)
        return (
            <div className="premium-container">
            <div className="premium-first-container">
                <img src={imageUrl}  alt="premium-image" className="premium-image-top"/>
                <p className="premium-para">Buy NxtWatch  Premium Prepaid Plans with UPI</p>
                <button type="button" className="button-getit-premium">GET IT NOW</button>
            </div>
            <div className="premium-second-container">
                <button type="button" className="intoButon" onClick={toggleVisible}><IoCloseOutline  size="20"/></button>
            </div>
           
         </div>
        )
    return null
   


}


export default Premiumcontainer
//
{/* <div className="premium-second-container">
<img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"  className="logo-premium"/>
<button type="button"><IoCloseOutline color="green" size="50"/></button>
</div> */}
//