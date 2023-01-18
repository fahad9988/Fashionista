import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR } from "./product.types";
import axios from "axios"

export const getMenProducts=()=>async(dispatch)=>{
dispatch({type:GET_PRODUCTS_LOADING});
try {
 let res=await axios.get("https://snapdeal-json-server.onrender.com/mens");
 dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
} catch (error) {
 dispatch({type:GET_PRODUCTS_ERROR});
}
}