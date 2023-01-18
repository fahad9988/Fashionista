



import AllRoutes from './all-routes/AllRoutes';


import reactLogo from './assets/react.svg'
import Footer from './components/Akshay/Footer'
import Navbar from './components/Akshay/Navbar'
import Admin from './pages/admin/Admin';
function App() {

  return (
    <div >
      <Navbar />
      <AllRoutes/>
      <Admin/>
      <Footer/>
    </div>

  )
}

export default App
