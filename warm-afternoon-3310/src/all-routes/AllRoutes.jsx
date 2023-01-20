import React from 'react';
import {Routes,Route} from "react-router-dom";
import Usersdata from '../pages/admin-users/Usersdata';
import Admin from '../pages/admin/Admin';

import ProductCart from '../pages/cart/productCart';

import MenProducts from '../pages/men-products/MenProducts';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/menproducts' element={<MenProducts/>} ></Route>
        <Route path='/usersdata' element={<Usersdata/>} ></Route>
        <Route path='/admin' element={<Admin/>} ></Route>
        <Route path='/productCart' element={<ProductCart/>} ></Route>
      </Routes>
      
    </div>
  )
}

export default AllRoutes