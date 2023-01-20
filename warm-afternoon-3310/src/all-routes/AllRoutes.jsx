import React from 'react';
import {Routes,Route} from "react-router-dom";
import KidProducts from '../pages/kid-products/KidProducts';
import MenProducts from '../pages/men-products/MenProducts';
import WomenProducts from '../pages/women-products/WomenProducts';

import SingleProduct from "../pages/single-product/SingleProduct"

import Usersdata from '../pages/admin-users/Usersdata';
import Admin from '../pages/admin/Admin';

import ProductCart from '../pages/cart/productCart';

import MenProducts from '../pages/men-products/MenProducts';
// import { Auth0Provider } from '@auth0/auth0-react';




const AllRoutes = () => {
  return (
    <div>
      <Routes>

        <Route path='/menproducts' element={<MenProducts/>} ></Route>
        <Route path='/womenproducts' element={<WomenProducts/>} ></Route>
        <Route path='/kidproducts' element={<KidProducts/>} ></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/usersdata' element={<Usersdata/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>
        <Route path='/productCart' element={<ProductCart/>} ></Route>
        <Route path='/menproducts' element={<MenProducts/>}></Route>
      </Routes>
      
    </div>
  )
}

export default AllRoutes