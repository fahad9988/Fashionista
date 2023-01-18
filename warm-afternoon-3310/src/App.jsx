import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './components/Akshay/Footer'
import Navbar from './components/Akshay/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar />
      <Footer/>
    </div>
  )
}

export default App
