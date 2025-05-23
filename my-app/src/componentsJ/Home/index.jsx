import './index.css';

import Rightcontainer from "../Rightcontainer/index.jsx"
import Header from "../Header/index.jsx"
import ColorContext from "../ColorContext.jsx" 
import {useContext} from "react"
import Premiumcontainer from "../Premium/index.jsx"
import VideosListContainer from "../CardItemsContainer/index.jsx"
const Home = () => {
    const{color,changeTheme,arr}=useContext(ColorContext) 
    const classApply=color==="white"? "applyWhite" :"applyBlack"
    const colorForIcon=color==="black"?"white":""
    const style={color:colorForIcon}
   
   
   

        return (
<div className={`home-container ${classApply}`}>
          <div className="top-right-header-jav890">
          <Header />
          </div>
         <div className='middle-container-left-premium'>
         <Rightcontainer  selectLink="Home"/>
          <Premiumcontainer />
         </div>
      <VideosListContainer />


</div>
  );


};

export default Home;

