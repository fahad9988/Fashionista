import React from 'react';
import {Routes,Route} from "react-router-dom";
import KidProducts from '../pages/kid-products/KidProducts';
import MenProducts from '../pages/men-products/MenProducts';
import WomenProducts from '../pages/women-products/WomenProducts';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/menproducts' element={<MenProducts/>} ></Route>
        <Route path='/womenproducts' element={<WomenProducts/>} ></Route>
        <Route path='/kidproducts' element={<KidProducts/>} ></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes