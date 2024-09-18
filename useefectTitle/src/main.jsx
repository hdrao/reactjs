import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Commentsform from './Commentsform.jsx'
import Joker from './joker.jsx'
import SearchBox from './weather.jsx'
import InfoBox from './InfoBox.jsx'
import WeatherApp from './Weatherreact.jsx'
createRoot(document.getElementById('root')).render(
     <div>
          <WeatherApp />
     </div>

)
