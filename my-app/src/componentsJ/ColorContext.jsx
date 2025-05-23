import React,{useState,createContext} from "react"
import Cookies from "js-cookie"
import { IoMdHome } from "react-icons/io";
import { ImFire } from "react-icons/im";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const ColorContext=createContext();
export const  ColorProvider=({children})=>{
    const jwt=Cookies.get("color")
      if(jwt===undefined)
          Cookies.set("color","white")
      const [color,setColor]=useState(Cookies.get("color"))
      const changeTheme=()=>{
        const changeColor= color==="white"?"black":"white";
        Cookies.set("color",changeColor)
        setColor(changeColor)
      }
      const colorForIcon=color==="black"?"white":""
      const style={color:colorForIcon}
  
      const arr=[
        {
          name:"Home",
          imageUrl:[<IoMdHome size="22" style={style}/>]
        },
        {
          name:"Trending",
          imageUrl:[<ImFire size="22" style={style}/>]
        },
        {
          name:"Gaming",
          imageUrl:[<SiYoutubegaming size="22"  style={style}/>]
        },
        {
          name:"Saved",
          imageUrl:[<MdOutlinePlaylistAdd size="22" style={style}/>]
        }
      ]
    return (
        <ColorContext.Provider value={{color,changeTheme,arr}} >
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext