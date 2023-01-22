import {ADD_TO_CART , CART_ERROR , CART_LOADING, GET_CART ,REMOVE_FROM_CART} from "./cart.types";

const initialState ={
  loading : false,
  error : false,
  cart : []
}

const cartReducer = (state=initialState , {type,payload}) =>{
  switch(type){
    case CART_LOADING : {
      return {
        ...state,
        loading : true,
        error:false
      }
    }
    case CART_ERROR : {
      return{
        ...state,
        loading : false ,
        error : true
      }
    }
    case ADD_TO_CART : {
      return{
        ...state,
        loading : false ,
        cart : [...state.cart,payload]
      }
    };
    case GET_CART: return {
      ...state,
      cart:payload
    };
    case REMOVE_FROM_CART:
      let deleted=state.cart.filter((e)=>{
        return e.id!==payload
      })
      return {
        ...state,
        cart:deleted
      }
    default:{
      return state
    }

  }

}

export default cartReducer