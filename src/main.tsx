// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/tailwind.style.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
