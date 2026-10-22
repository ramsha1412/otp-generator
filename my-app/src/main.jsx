import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { OTPGenerator } from './Index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OTPGenerator />
  </StrictMode>,
)
