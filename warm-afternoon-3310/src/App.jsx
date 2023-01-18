import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css';
import Auth from "./pages/authentication/Auth";
// import SignIn from "../src/pages/authentication/SignIn";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth />
    </>
  )
}

export default App
