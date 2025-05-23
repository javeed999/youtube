import {useState,useContext} from "react"
import {Link } from "react-router-dom"
import ColorContext from "../ColorContext.jsx"
const Rightcontainer=(props)=>{
  const {selectLink}=props
    const [activeName,setActiveName]=useState(selectLink)
  const {color,changeTheme,arr}=useContext(ColorContext)
  console.log(arr)
    const checkMode=()=>{
        return color==="white"?true:false
      }
    const BuildCard = ({obj}) => {
        const changeTrendingCardBackground=(name)=>{
          setActiveName (name)
        }
        let trendColorInAnyTheme=null;
        if(color==="white"  && obj.name===activeName)
        {
          trendColorInAnyTheme="selectTabInLightMode";
        }
        else if(color==="black" && obj.name===activeName)
        {
          trendColorInAnyTheme="selectTabInDarkMode"
        }
        const trendingHeading=!checkMode()?"changeToWhiteTrending" :""
       const name=obj.name.toLowerCase()
        return (
          <Link to={`/${name}`} style={{ textDecoration: "none", color: "inherit" }} className="nav-link">
          <div className={`${color==="white"?"":""}`}>
            <div className={`trending-card  ${trendColorInAnyTheme}`} onClick={()=>changeTrendingCardBackground(obj.name)}>
            <span className="">{ obj.imageUrl[0] }</span>
           <p className={`heading-trending  ${trendingHeading}`}>{obj.name}</p>
          </div>
          </div>
          </Link>
        );
      };

    return (
        <>
        <div className=''>
        <div className="left-top-bars"  >{arr.map(eachItem => <BuildCard obj={eachItem} key={eachItem.name}/> )}</div>
          </div>
        </>
    )

}


export default Rightcontainer