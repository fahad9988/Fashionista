
import * as types from "./admin.types";
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE} from "./admin.types"

const initialState = {
  isLoading: false,
  isError: false,
  data:[],
  users: [],
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


 


    default:{
       return state;
    }
     
  }
};