import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PremiumProvider} from "./componentsJ/ProviderComponent.jsx"
import {ColorProvider} from "./componentsJ/ColorContext.jsx"
import ChatWidget from './componentsJ/ChatBot/ChatWidget.jsx'

// import {VideosProvider} from "./componentsJ/SavedVidoes.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PremiumProvider>
    <ColorProvider >
    <App />
  </ColorProvider >
    </PremiumProvider>
    <ChatWidget />
  </StrictMode>,
)
