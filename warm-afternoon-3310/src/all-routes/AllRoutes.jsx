import React from 'react';
import {Routes,Route} from "react-router-dom";
import KidProducts from '../pages/kid-products/KidProducts';
import WomenProducts from '../pages/women-products/WomenProducts';
import SingleProduct from "../pages/single-product/SingleProduct";
import ProductCart from '../pages/cart/productCart';
import MenProducts from '../pages/men-products/MenProducts';
import { Auth0Provider } from '@auth0/auth0-react';
import HomePage from '../pages/homepage/HomePage';
import Wishlist from '../pages/wishlist/Wishlist';
import AdminRegister from '../pages/admin/AdminRegister';
import AdminLogin from "../pages/admin/AdminLogin";
import Payment from '../pages/payment/Payment';
import PrivateRoute from './PrivateRoute';
import { AdminSideAddProducts } from '../pages/admin-review/AdminSideAddProducts';
import AdminSideProducts from '../pages/admin-review/AdminSideProducts';
import AllUsers from '../pages/admin-review/Alladmins';
import MenSideProducts from '../pages/admin-review/MenSideProducts';
import WomenSideProducts from '../pages/admin-review/WomenSideProducts';
import AllCharts from '../pages/admin-review/charts';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/menproducts' element={<MenProducts/>} ></Route>
        <Route path='/womenproducts' element={<WomenProducts/>} ></Route>
        <Route path='/kidproducts' element={<KidProducts/>} ></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        
        {/* <Route path='/admin' element={<Admin/>} ></Route> */}
        <Route path='/adminadd' element={<AdminSideAddProducts/>} ></Route>
        <Route path='/adminproducts' element={<AdminSideProducts/>} ></Route>
        <Route path='/adminmenproducts'  element={<MenSideProducts/>}></Route>
        <Route path='/adminwomenproducts'  element={<WomenSideProducts/>}></Route>
        <Route path='/adminall' element={<AllUsers/>} ></Route>
        <Route path='/graphproduct' element={<AllCharts/>} ></Route>
        <Route path='/productCart' element={<ProductCart/>} ></Route>
        <Route path='/menproducts' element={<MenProducts/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>
        <Route path='/adminregister' element={<AdminRegister/>} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        
        <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
       
        
        
        
        {/* <Route path='userlogin' element={<Auth />} /> */}
      </Routes>
      
    </div>
  )
}

export default AllRoutes