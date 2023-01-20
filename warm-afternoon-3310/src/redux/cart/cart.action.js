import { getCartAPI } from "./cart.api"
import { CART_ERROR, GET_CART } from "./cart.types"

export const getCart = async()=> {
 try{
   let data = await getCartAPI()
   dispatch({ type:GET_CART , payload : data})
 }catch(err){
  dispatch({type: CART_ERROR})
 }
}