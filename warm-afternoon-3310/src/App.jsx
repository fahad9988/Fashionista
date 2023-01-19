import AllRoutes from './all-routes/AllRoutes';
import React from "react";
import ReactDOM from "react-dom";
import Footer from './components/Akshay/Footer';
import Navbar from './components/Akshay/Navbar';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {

  return (
    <div >
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
