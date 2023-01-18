import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR } from "./product.types";
import axios from "axios"

export const getMenProducts=(joggers,jeans,sweatshirt,trousers,chinos,casualshirt,search,sort,popularity,roadster,highlander,locomotive,ivoc,low,high)=>async(dispatch)=>{
dispatch({type:GET_PRODUCTS_LOADING});
try {
 let url=`https://snapdeal-json-server.onrender.com/mens?q=${search}`;

 if(low||high){
  url=`https://snapdeal-json-server.onrender.com/mens?q=${search}&price_gte=${low}&price_lte=${high}`
 }else{
  url=`https://snapdeal-json-server.onrender.com/mens?q=${search}`
 }
 
 if(sort){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?q=${search}&_sort=price&_order=${sort}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?q=${search}&_sort=price&_order=${sort}`
  }
 }

 if(popularity){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?q=${search}&_sort=rating&_order=${popularity}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?q=${search}&_sort=rating&_order=${popularity}`
  }

 }

 if(joggers||jeans||sweatshirt||trousers||chinos||casualshirt||roadster||locomotive||highlander||ivoc){

  if(sort){
   if(roadster||locomotive||highlander||ivoc){
    if(low||high){
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
    }else{
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
    }
   }else{
    if(low||high){
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
    }else{
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}`
    }
   
   }
 
 }else if(popularity){
  if(roadster||locomotive||highlander||ivoc){
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}`
   }
  
  }else{
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=rating&_order=${popularity}&q=${search}`
   }
  
  }
 
 }else{
  if(roadster||locomotive||highlander||ivoc){
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
   }
   
  }else{
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}`
   }
   
  }
 }
}

 let res=await axios.get(url);
 dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
} catch (error) {
 dispatch({type:GET_PRODUCTS_ERROR});
}
}