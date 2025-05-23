import { useState } from 'react'
import {BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'

import './App.css'
import LoginForm from "./componentsJ/Login/index.jsx"
import Home from "./componentsJ/Home/index.jsx"
import SavedVideos from "./componentsJ/SavedVideos/index.jsx"
import ProtectedRoute from './componentsJ/ProtectedRoute.jsx'
import TrendingVideosContainer from "./componentsJ/TrendingCards/index.jsx"
import GamingCardsContainer from "./componentsJ/GamingCards/index.jsx"
import CardFullDetails from "./componentsJ/CardFullDetails/index.jsx"
function App() {

  return (
    <BrowserRouter>
 
    <Routes> 
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/trending" element={<ProtectedRoute element={<TrendingVideosContainer />}  />}  />
      <Route path="/gaming"    element={<ProtectedRoute elment={<GamingCardsContainer />}  />}/>
      <Route path="/:id" element={<CardFullDetails  />}/>
      <Route path="/video/:id" element={<CardFullDetails />} />
      <Route path="/saved" element={<ProtectedRoute element={<SavedVideos />}  />} />
      {/* <ChatWidget /> */}

    </Routes>
  </BrowserRouter>
  )
}

export default App


{/* <div className="video-like-button">
<p className={`video-stats ${color === "white" ? "applyDarkFontDesc" : "applyWhiteFontDesc"}`}>
    {data.viewCount} views • {data.publishedAt}
</p>

</div> */}