import React from 'react';
import {Routes,Route} from "react-router-dom";
import MenProducts from '../pages/men-products/MenProducts';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/menproducts' element={<MenProducts/>} ></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes