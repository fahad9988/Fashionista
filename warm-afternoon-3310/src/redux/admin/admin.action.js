import axios from 'axios'
import * as types from './admin.types'
import {ADD_data_ERROR,REMOVE_data_ERROR,UPDATE_data_LOADING,ADD_data_LOADING,REMOVE_data_LOADING,DELETE_PRODUCT_WOMENS,DELETE_PRODUCT_MENS,UPDATE_PRODUCT_WOMENS,GET_data_LOADING,UPDATE_PRODUCT_MENS,GET_WOMENS_SUCCESS,GET_MENS_SUCCESS,ADD_WOMENS_SUCCESS,ADD_MENS_SUCCESS,GET_USERS_REQUEST,GET_USERS_SUCCESS,GET_USERS_FAILURE,DELETE_USER_REQUEST,DELETE_USER_SUCCESS,DELETE_USER_FAILURE} from "./admin.types"


// get product

export const Get_data_item=()=>async(dispatch)=>{

    dispatch({type:types.GET_data_LOADING})
    try {
           let response=await axios.get(`https://snapdeal-json-server.onrender.com/kids`)
           //console.log(response.data)
           dispatch({type:types.GET_data_SUCCESS,payload:response.data})
    } catch (error) {
        dispatch({type:types.GET_data_ERROR})
    }
}

export const getMensData = () => async (dispatch) => {
    dispatch({ type: GET_data_LOADING });
    try {
    let response=await axios.get(`https://snapdeal-json-server.onrender.com/mens`)
   // console.log(response.data)
      dispatch({ type: GET_MENS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_data_ERROR });
    }
  };
  
  export const getWomensData = () => async (dispatch) => {
    dispatch({ type: GET_data_LOADING });
    try {
      let response=await axios.get(`https://snapdeal-json-server.onrender.com/womens`)
      //console.log(response.data)
      dispatch({ type: GET_WOMENS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_data_ERROR });
    }
  };


//add product


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

export const postMensData = (mensProduct) => async (dispatch) => {
    console.log("Men", mensProduct);
    dispatch({ type: ADD_data_LOADING });
    try {
      let res=await axios.post('https://snapdeal-json-server.onrender.com/mens',mensProduct)
      console.log(res.data)
      dispatch({ type: ADD_MENS_SUCCESS , payload : res.data});
    } catch (error) {
      dispatch({ type: ADD_data_ERROR });
    }
  };

  
  export const postWomensData = (womensProduct) => async (dispatch) => {
    console.log("Women", womensProduct);
    dispatch({ type: ADD_data_LOADING });
    try {
      let res=await axios.post('https://snapdeal-json-server.onrender.com/womens',womensProduct)
      console.log(res.data)
      dispatch({ type: ADD_WOMENS_SUCCESS });
    } catch (error) {
      dispatch({ type: ADD_data_ERROR });
    }
  };


//update product


export const UPDATE_data_item=(id,change)=>async(dispatch)=>{

     dispatch({type:types.UPDATE_data_LOADING})
    try {
        let res=await axios.patch( `https://snapdeal-json-server.onrender.com/kids/${id}`,change)
        //console.log(res.data)
        dispatch({type:types.UPDATE_data_SUCCESS,payload:res.data})
        
    } catch (error) {
        dispatch({type:types.UPDATE_data_ERROR})        
    }

}

export const updateMensData = (id, change) => async (dispatch) => {
    dispatch({ type: UPDATE_data_LOADING });
    try {
      let res=await axios.patch( `https://snapdeal-json-server.onrender.com/mens/${id}`,change)
       //console.log(res.data)
      dispatch({ type: UPDATE_PRODUCT_MENS , payload : res.data});
    } catch (error) {
      dispatch({ type: UPDATE_data_ERROR });
    }
  };

export const updateWomensData = (id, change) => async (dispatch) => {
    dispatch({ type: UPDATE_data_LOADING });
    try {
        let res=await axios.patch( `https://snapdeal-json-server.onrender.com/womens/${id}`,change)
       //console.log(res.data)
     
      dispatch({ type: UPDATE_PRODUCT_WOMENS ,payload : res.data});
    } catch (error) {
      dispatch({ type: UPDATE_data_ERROR });
    }
  };



//Delete 


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


export const deleteMensData = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_data_LOADING });
    try {
        let res=await axios.delete( `https://snapdeal-json-server.onrender.com/mens/${id}`)
        console.log(res.data)
      
      dispatch({ type: DELETE_PRODUCT_MENS , payload : id });
    } catch (error) {
      dispatch({ type: REMOVE_data_ERROR });
    }
  };
  
  export const deleteWomensData = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_data_LOADING });
    try {
        let res=await axios.delete( `https://snapdeal-json-server.onrender.com/womens/${id}`)
        console.log(res.data)
      dispatch({ type: DELETE_PRODUCT_WOMENS , payload : id});
    } catch (error) {
      dispatch({ type: REMOVE_data_ERROR });
    }
  };




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
 
