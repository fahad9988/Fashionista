
import HomePage from './pages/homepage/HomePage'
import AllRoutes from './all-routes/AllRoutes';
import React from "react";
import ReactDOM from "react-dom";
import Footer from './components/Akshay/Footer';
import Navbar from './components/Akshay/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';


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
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Auth0Provider
        domain="dev-qe8rba52yh4bo8bp.us.auth0.com"
        clientId="hr1AAaFk3mX6DCAk0iCQDome4xhe2AwL"
        redirectUri={window.location.origin}
      >
        <Navbar />
        <AllRoutes/>
        <Footer/>
      </Auth0Provider>

    </div>

  )
}

export default App
