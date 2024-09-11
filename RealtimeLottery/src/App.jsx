import './App.css'
import Lottery from './Lottery.jsx'

function App() {  
  const winCondition = (array) => {
  return array.reduce((total,val)=>{return total + val})
}
  return (
    <div className="App">
      < Lottery n={3} winCondition={winCondition} />
    </div>
  )
}

export default App
