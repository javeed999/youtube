import {useNavigate} from "react-router-dom"
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";
import {useContext} from "react"
import ColorContext from "../ColorContext.jsx"
import "./index.css"
let Header=()=>{
    const navigate=useNavigate()
    const logOutButton=()=>{
        navigate("/login",{replace:true})
    }
    const {color,changeTheme}=useContext(ColorContext)
    const buttonStyles={backgroundColor:"transparent",borderRadius:"4px",padding:"5px",color:"white"}
    const logoutButton=color==="black" ? "colorWhite" :""
    const nxtTubeImage= color==="white" ?"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"  :"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"


    return (
        <div className={`top-container-home ${color==="white"?"applyWhite":"applyBlack"}`}>
            <div><img src={nxtTubeImage} className='image-top-home'  /></div>
              <div className='top-second-container'>
              <button type="button" className='theme-change-button' onClick={changeTheme}><span>{ color==="white" && <BsFillMoonFill size="30"/> }  { color==="black" &&<RiSunLine size="40" style={buttonStyles}/>}          </span></button>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" className='profile-logo-home' />
                <button type="button" className={`button-top-home ${logoutButton}`} onClick={logOutButton}>LogOut</button> 
              </div>
      </div>
    )
}

export default Header