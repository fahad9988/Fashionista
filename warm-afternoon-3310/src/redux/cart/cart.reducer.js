import {GET_CART , CART_ERROR , CART_LOADING } from "./cart.types"

const initialState ={
  loading : false,
  error : false,
  data : []
}

const cartReducer = (state=initialState , {type,payload}) =>{
  switch(type){
    case CART_LOADING : {
      return {
        ...state,
        loading : true
      }
    }
    case CART_ERROR : {
      return{
        ...state,
        loading : false ,
        error : true
      }
    }
    case GET_CART : {
      return{
        ...state,
        loading : false ,
        data : payload
      }
    }
    default:{
      return state
    }
  }

}

export default cartReducer