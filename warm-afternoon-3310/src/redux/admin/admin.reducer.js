
import * as types from "./admin.types";
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE, ADD_MENS_SUCCESS , ADD_WOMENS_SUCCESS , GET_MENS_SUCCESS , GET_WOMENS_SUCCESS , UPDATE_PRODUCT_MENS ,UPDATE_PRODUCT_WOMENS, DELETE_PRODUCT_MENS , DELETE_PRODUCT_WOMENS} from "./admin.types"

const initialState = {
  isLoading: false,
  isError: false,
  data:[],
  users: [],
  mensData: [],
  womensData: [],
};

export const datareducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_data_LOADING:{
      return {
        ...state,
        isLoading:true

      }
    } 
    case types.GET_data_SUCCESS:{
      
      return {
        ...state,
        isLoading:false,
        data:payload

      }
    }    
    case types.GET_data_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
    } 
    case types.ADD_data_LOADING:{
      return {
        ...state,
        isLoading:true
        
      }
     } 

    
     case types.ADD_data_SUCCESS:{
      return {
        ...state,
        isLoading:false,
        data:[...state.data,payload]


      }
     }
    
     case types.ADD_data_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true



      }
     }
    
     case types.UPDATE_data_LOADING:{
      return {
        ...state,
        isLoading:true

      }
     }
    
     case types.UPDATE_data_SUCCESS:{

      let Updated=state.data.map((data)=>{
          if(data.id==payload.id){
           return {...data,payload}
          }
          return data
      })
      return {
        ...state,
        data:Updated


      }
     }
    
     case types.UPDATE_data_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true


      }
     }
    
     case types.REMOVE_data_LOADING:{
      return {
        ...state,
        isLoading:true


      }
     }
    
     case types.REMOVE_data_SUCCESS:{

      let removed=state.data.filter((data)=>data.id!=payload)

      return {
        ...state,
        data:removed
      }

     }

     case types.REMOVE_data_ERROR:{
      return {
        ...state,
        isLoading:false,
        isError:true

      }
     }

      case types.SORT_dataES: {
      if (payload == "high") {
    
        let sorted = state.data.sort(
          (a, b) => Number(a.price) - Number(b.price)
        );
    
        return { ...state, data: [...sorted] };
      } else if (payload == "low") {
        let sorted = state.data.sort(
          (a, b) => Number(b.price) - Number(a.price)
        );
        return { ...state, data: [...sorted] };
      }
    }


    case GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
        isError: false,
      };
      
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };









    case ADD_MENS_SUCCESS: {
        return {
            ...state,
            isLoading:false,
            mensData:[...state.mensData,payload]
        }
    }
    case ADD_WOMENS_SUCCESS: {
        return {
            ...state,
            isLoading:false,
            womensData:[...state.womensData,payload]
        }
    }

    case GET_MENS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          isError: false,
          mensData: payload,
      }
  }
  case GET_WOMENS_SUCCESS: {
      return {
          ...state,
          isLoading: false,
          isError: false,
          womensData: payload,
      }
  }

  case UPDATE_PRODUCT_MENS: {
    let Updated=state.mensData.map((mensData)=>{
      if(mensData.id==payload.id){
       return {...mensData,payload}
      }
      return mensData
  })
  return {
    ...state,
    mensData:Updated


  }
}

case UPDATE_PRODUCT_WOMENS: {
  let Updated=state.womensData.map((womensData)=>{
    if(womensData.id==payload.id){
     return {...womensData,payload}
    }
    return womensData
})
return {
  ...state,
  womensData:Updated
}
}


case DELETE_PRODUCT_MENS: {
  let removed=state.mensData.filter((mensData)=>mensData.id!=payload)

      return {
        ...state,
        mensData:removed
      }
}

case DELETE_PRODUCT_WOMENS: {
  let removed=state.womensData.filter((womensData)=>womensData.id!=payload)

      return {
        ...state,
        womensData:removed
      }
}


 


    default:{
       return state;
    }
     
  }
};