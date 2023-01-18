import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR } from "./product.types";

const initialState={
 loading:false,
 error:false,
 data:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
switch(type){
 case GET_PRODUCTS_LOADING:return {
  ...state,
  loading:true,
  error:false
 };
 case GET_PRODUCTS_ERROR:return {
  ...state,
  loading:false,
  error:true
 };
 case GET_PRODUCTS_SUCCESS:return {
  ...state,
  loading:false,
  error:false,
  data:payload
 }
 default:return state
}
}