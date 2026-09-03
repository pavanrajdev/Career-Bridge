import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'
import ApplicationProvider from './Context/ApplicationProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
    <ApplicationProvider>
    <ScrollToTop />
    <App />
</ApplicationProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
