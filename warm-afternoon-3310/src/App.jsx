import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import Admin from './pages/admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Admin/>
    </div>
  )
}

export default App
