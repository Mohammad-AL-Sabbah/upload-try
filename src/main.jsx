import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New2 from './New.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <New2 />
    <App />
  </StrictMode>,
)
