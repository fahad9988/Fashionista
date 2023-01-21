import {ADD_TO_CART , CART_ERROR , CART_LOADING ,GET_CART} from "./cart.types";
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