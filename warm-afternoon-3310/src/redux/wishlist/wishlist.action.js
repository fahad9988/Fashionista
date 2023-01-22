import {ADD_TO_WISHLIST , WISHLIST_ERROR , WISHLIST_LOADING ,GET_WISHLIST,REMOVE_WISHLIST} from "./wishlist.types";
import axios from "axios";


export const addWishlist=(item)=>async(dispatch)=>{
dispatch({type:WISHLIST_LOADING});
try {
  let res= await axios.post("https://snapdeal-json-server.onrender.com/wishlist",item);
  dispatch({type:ADD_TO_WISHLIST,payload:res.data})
} catch (error) {
  dispatch({type:WISHLIST_ERROR});
}
}

export const getWishlistItems=(sort)=>async (dispatch)=>{
  dispatch({type:WISHLIST_LOADING});
try {
  let url="https://snapdeal-json-server.onrender.com/wishlist";
  if(sort){
    url=`https://snapdeal-json-server.onrender.com/wishlist?_sort=price&_order=${sort}`
  }
  let res= await axios.get(url);
  dispatch({type:GET_WISHLIST,payload:res.data})
} catch (error) {
  dispatch({type:WISHLIST_ERROR});
}
}

export const removeWishlist=(id)=>async(dispatch)=>{
  dispatch({type:WISHLIST_LOADING});
  try {
    let res= await axios.delete(`https://snapdeal-json-server.onrender.com/wishlist/${id}`);
    dispatch({type:REMOVE_WISHLIST,payload:id})
  } catch (error) {
    dispatch({type:WISHLIST_ERROR});
  }
  }