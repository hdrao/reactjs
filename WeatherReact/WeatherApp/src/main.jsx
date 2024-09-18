import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherApp from './Weatherreact.jsx'

createRoot(document.getElementById('root')).render(
  <div>
  <WeatherApp />
</div>
)
