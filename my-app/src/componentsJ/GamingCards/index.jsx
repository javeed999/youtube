import {useContext} from "react"
import "./index.css"
import Header from "../Header/index.jsx"
import Rightcontainer from "../Rightcontainer/index.jsx"
import ColorContext from "../ColorContext.jsx"
import GamingItems from "../GamingItems/index.jsx"
const GamingCardsContainer=()=>{
    const {color}=useContext(ColorContext)
    const classApply=color==="white"? "applyWhite" :"applyBlack"

    
    return (
        <div className={`trending-full-width-cobver  ${classApply}`} >
       <div className="trending-right-container-jav">
        <Header />
        <div className="middle-container-left-premium">
        <Rightcontainer selectLink="Gaming"/>
        <GamingItems />
        </div>
       </div>
        </div>
    )
}

export default GamingCardsContainer