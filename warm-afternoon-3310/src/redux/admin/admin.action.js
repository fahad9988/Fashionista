import axios from 'axios'
import * as types from './admin.types'
import {GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAILURE} from "./admin.types"

export const Get_data_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_data_LOADING})
    try {
           let response=await axios.get(`https://snapdeal-json-server.onrender.com/kids`)
           console.log(response.data)
           dispatch({type:types.GET_data_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:types.GET_data_ERROR})

        
    }
    
}

export const ADD_data_item=(cred)=>async(dispatch)=>{

    dispatch({type:types.ADD_data_LOADING})
    try {
        let res=await axios.post('https://snapdeal-json-server.onrender.com/kids',cred)
        console.log(res.data)
        dispatch({type:types.ADD_data_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.ADD_data_ERROR})        
    }

}

export const UPDATE_data_item=(id,change)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_data_LOADING})
    try {
        let res=await axios.patch( `https://snapdeal-json-server.onrender.com/kids/${id}`,change)
        console.log(res.data)
        dispatch({type:types.UPDATE_data_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_data_ERROR})        
    }

}

export const REMOVE_data_item=(id)=>async(dispatch)=>{
    console.log(id)
    dispatch({type:types.REMOVE_data_LOADING})
    try {
        let res=await axios.delete( `https://snapdeal-json-server.onrender.com/kids/${id}`)
        console.log(res.data)
        dispatch({type:types.REMOVE_data_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.REMOVE_data_ERROR})        
    }
}


export const sortMydata = (how) => (dispatch) => {
    dispatch({ type: types.SORT_dataES, payload: how });
  };



export const getUsers = () => async(dispatch) => {
    dispatch({ type: types.GET_USERS_REQUEST });
    try {
        let response=await axios.get(`https://snapdeal-json-server.onrender.com/users`)
        console.log(response.data)
        dispatch({type:types.GET_USERS_SUCCESS,payload:response.data})
    } 
    catch (error) {
      dispatch({type:types.GET_USERS_FAILURE})
    }
  };




export  const deleteUser = (id) =>async (dispatch) => {
    console.log(id)
    dispatch({ type: DELETE_USER_REQUEST });
    try {
        let res=await axios.delete(`https://snapdeal-json-server.onrender.com/users/${id}`)
        console.log(res.data)
        dispatch({type:types.DELETE_USER_SUCCESS,payload:id})
        
    } catch (error) {
        dispatch({type:types.DELETE_USER_FAILURE})        
    }

  };
 
