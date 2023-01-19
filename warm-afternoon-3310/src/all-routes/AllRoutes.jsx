import React from 'react';
import {Routes,Route} from "react-router-dom";
import MenProducts from '../pages/men-products/MenProducts';
// import { Auth0Provider } from '@auth0/auth0-react';
import Cart from "../pages/cart/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/menproducts' element={<MenProducts/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes