import React,{createContext,useState} from "react"
 const VideosContext=createContext();
export const VideosProvider=({children})=>{
    const [videos,setVidoes]=useState([])
    const setVideos=()=>{

    }
    return (
        <VideosContext.Provider value={{videos,setVidoes}}>
            {children}
        </VideosContext.Provider>
    )

}

export default VideosContext