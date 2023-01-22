import {ADD_TO_CART , CART_ERROR , CART_LOADING ,GET_CART,REMOVE_FROM_CART} from "./cart.types";
import axios from "axios";


export const addCart=(item)=>async(dispatch)=>{
dispatch({type:CART_LOADING});
try {
  let res= await axios.post("https://snapdeal-json-server.onrender.com/cart",item);
  dispatch({type:ADD_TO_CART,payload:res.data})
} catch (error) {
  dispatch({type:CART_ERROR});
}
}

export const getCartItems=()=>async (dispatch)=>{
  dispatch({type:CART_LOADING});
try {
  let res= await axios.get("https://snapdeal-json-server.onrender.com/cart");
  dispatch({type:GET_CART,payload:res.data})
} catch (error) {
  dispatch({type:CART_ERROR});
}
}

export const deleteCart=(id)=>async(dispatch)=>{
  dispatch({type:CART_LOADING});
  try {
    let res= await axios.delete(`https://snapdeal-json-server.onrender.com/cart/${id}`);
    dispatch({type:REMOVE_FROM_CART,payload:id})
  } catch (error) {
    dispatch({type:CART_ERROR});
  } 
}