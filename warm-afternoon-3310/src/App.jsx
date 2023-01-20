



import AllRoutes from './all-routes/AllRoutes';


import reactLogo from './assets/react.svg'
import Footer from './components/Akshay/Footer'
import Navbar from './components/Akshay/Navbar'
import Usersdata from './pages/admin-users/Usersdata';
import Admin from './pages/admin/Admin';



function App() {

  return (
    <div >
      <Navbar />
      <AllRoutes/>
      {/* <Admin/> */}
      {/* <Usersdata/> */}
      <Footer/>
    </div>

  )
}

export default App
