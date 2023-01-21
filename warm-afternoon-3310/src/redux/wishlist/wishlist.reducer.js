import {ADD_TO_WISHLIST , WISHLIST_ERROR , WISHLIST_LOADING ,GET_WISHLIST,REMOVE_WISHLIST} from "./wishlist.types";

const initialState ={
  loading : false,
  error : false,
  wishlist : []
}

const wishlistReducer = (state=initialState , {type,payload}) =>{
  switch(type){
    case WISHLIST_LOADING : {
      return {
        ...state,
        loading : true,
        error:false
      }
    }
    case WISHLIST_ERROR : {
      return{
        ...state,
        loading : false ,
        error : true
      }
    }
    case ADD_TO_WISHLIST : {
      return{
        ...state,
        loading : false ,
        wishlist : [...state.wishlist,payload]
      }
    };
    case GET_WISHLIST: return {
      ...state,
      wishlist:payload
    };
    case REMOVE_WISHLIST: 
    let deleted=state.wishlist.filter((e)=>{
     return e.id!=payload
    })
    return {
      ...state,
      wishlist:deleted
    }
    default:{
      return state
    }
  }

}

export default wishlistReducer