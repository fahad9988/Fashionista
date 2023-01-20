import { GET_PRODUCTS_SUCCESS,GET_PRODUCTS_LOADING,GET_PRODUCTS_ERROR,GET_WOMEN_PRODUCTS_SUCCESS,GET_KID_PRODUCTS_SUCCESS } from "./product.types";
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

 if((joggers||jeans||sweatshirt||trousers||chinos||casualshirt)&&(roadster||locomotive||highlander||ivoc)){

  if(sort){
   
    if(low||high){
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
    }else{
     url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
    }
 
 }else if(popularity){
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}`
   }
 
 }else{
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
   }
   
 }
}

if((joggers||jeans||sweatshirt||trousers||chinos||casualshirt)&&!(roadster||locomotive||highlander||ivoc)){
 if(sort){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}`
  }
 }else if(popularity){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=rating&_order=${popularity}&q=${search}`
  }
 }else{
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?myStyle=${joggers}&myStyle=${jeans}&myStyle=${sweatshirt}&myStyle=${trousers}&myStyle=${chinos}&myStyle=${casualshirt}&_sort=price&_order=${sort}&q=${search}`
  }
 }
}

if(!(joggers||jeans||sweatshirt||trousers||chinos||casualshirt)&&(roadster||locomotive||highlander||ivoc)){
 if(sort){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
  }
 }else if(popularity){
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=rating&_order=${popularity}&q=${search}`
  }
 }else{
  if(low||high){
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
  }else{
   url=`https://snapdeal-json-server.onrender.com/mens?title=${roadster}&title=${highlander}&title=${locomotive}&title=${ivoc}&_sort=price&_order=${sort}&q=${search}`
  }
 }
}

 let res=await axios.get(url);
 dispatch({type:GET_PRODUCTS_SUCCESS,payload:res.data})
} catch (error) {
 dispatch({type:GET_PRODUCTS_ERROR});
}
}

export const getWomenProducts=(kurta,saree,trousers,jeans,search,sort,popularity,kalini,anouk,khushalk,fashor,low,high)=>async(dispatch)=>{
  dispatch({type:GET_PRODUCTS_LOADING});
  try {
   let url=`https://snapdeal-json-server.onrender.com/womens?q=${search}`;
  
   if(low||high){
    url=`https://snapdeal-json-server.onrender.com/womens?q=${search}&price_gte=${low}&price_lte=${high}`
   }else{
    url=`https://snapdeal-json-server.onrender.com/womens?q=${search}`
   }
  
   
   if(sort){
    if(low||high){
     url=`https://snapdeal-json-server.onrender.com/womens?q=${search}&_sort=price&_order=${sort}&price_gte=${low}&price_lte=${high}`
    }else{
     url=`https://snapdeal-json-server.onrender.com/womens?q=${search}&_sort=price&_order=${sort}`
    }
   }
  
   if(popularity){
    if(low||high){
     url=`https://snapdeal-json-server.onrender.com/womens?q=${search}&_sort=rating&_order=${popularity}&price_gte=${low}&price_lte=${high}`
    }else{
     url=`https://snapdeal-json-server.onrender.com/womens?q=${search}&_sort=rating&_order=${popularity}`
    }
  
   }
  
   if((kurta||jeans||saree||trousers)&&(kalini||anouk||khushalk||fashor)){
  
    if(sort){
     
      if(low||high){
       url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
      }else{
       url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}`
      }
   
   }else if(popularity){
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=rating&_order=${popularity}&q=${search}`
     }
   
   }else{
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&title=${kalini}&title=${anouk}&title=${khushalk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}`
     }
     
   }
   }
  
   if((kurta||jeans||saree||trousers)&&!(kalini||anouk||khushalk||fashor)){
    if(sort){
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=price&_order=${sort}&q=${search}`
     }
    }else if(popularity){
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=rating&_order=${popularity}&q=${search}`
     }
    }else{
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?myStyle=${kurta}&myStyle=${jeans}&myStyle=${saree}&myStyle=${trousers}&_sort=price&_order=${sort}&q=${search}`
     }
    }
   }
   
   if(!(kurta||jeans||saree||trousers)&&(kalini||anouk||khushalk||fashor)){
    if(sort){
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}`
     }
    }else if(popularity){
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=rating&_order=${popularity}&q=${search}`
     }
    }else{
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/womens?title=${kalini}&title=${khushalk}&title=${anouk}&title=${fashor}&_sort=price&_order=${sort}&q=${search}`
     }
    }
   }
  
   let res=await axios.get(url);
   dispatch({type:GET_WOMEN_PRODUCTS_SUCCESS,payload:res.data})
  } catch (error) {
   dispatch({type:GET_PRODUCTS_ERROR});
  }
}

export const getKidProducts=(sweatshirt,tshirt,trackpants,blazer,search,sort,popularity,hellcat,hopscotch,plumtree,max,low,high)=>async(dispatch)=>{
    dispatch({type:GET_PRODUCTS_LOADING});
    try {
     let url=`https://snapdeal-json-server.onrender.com/kids?q=${search}`;
    
     if(low||high){
      url=`https://snapdeal-json-server.onrender.com/kids?q=${search}&price_gte=${low}&price_lte=${high}`
     }else{
      url=`https://snapdeal-json-server.onrender.com/kids?q=${search}`
     }
    
     
     if(sort){
      if(low||high){
       url=`https://snapdeal-json-server.onrender.com/kids?q=${search}&_sort=price&_order=${sort}&price_gte=${low}&price_lte=${high}`
      }else{
       url=`https://snapdeal-json-server.onrender.com/kids?q=${search}&_sort=price&_order=${sort}`
      }
     }
    
     if(popularity){
      if(low||high){
       url=`https://snapdeal-json-server.onrender.com/kids?q=${search}&_sort=rating&_order=${popularity}&price_gte=${low}&price_lte=${high}`
      }else{
       url=`https://snapdeal-json-server.onrender.com/kids?q=${search}&_sort=rating&_order=${popularity}`
      }
    
     }
    
     if((sweatshirt||blazer||tshirt||trackpants)&&(hellcat||hopscotch||plumtree||max)){
    
      if(sort){
       
        if(low||high){
         url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
        }else{
         url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=price&_order=${sort}&q=${search}`
        }
     
     }else if(popularity){
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=rating&_order=${popularity}&q=${search}`
       }
     
     }else{
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&title=${hellcat}&title=${hopscotch}&title=${plumtree}&title=${max}&_sort=price&_order=${sort}&q=${search}`
       }
       
     }
     }
    
     if((sweatshirt||blazer||tshirt||trackpants)&&!(hellcat||hopscotch||plumtree||max)){
      if(sort){
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=price&_order=${sort}&q=${search}`
       }
      }else if(popularity){
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=rating&_order=${popularity}&q=${search}`
       }
      }else{
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?myStyle=${sweatshirt}&myStyle=${blazer}&myStyle=${tshirt}&myStyle=${trackpants}&_sort=price&_order=${sort}&q=${search}`
       }
      }
     }
     
     if(!(sweatshirt||blazer||tshirt||trackpants)&&(hellcat||hopscotch||plumtree||max)){
      if(sort){
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=price&_order=${sort}&q=${search}`
       }
      }else if(popularity){
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=rating&_order=${popularity}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=rating&_order=${popularity}&q=${search}`
       }
      }else{
       if(low||high){
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=price&_order=${sort}&q=${search}&price_gte=${low}&price_lte=${high}`
       }else{
        url=`https://snapdeal-json-server.onrender.com/kids?title=${hellcat}&title=${plumtree}&title=${hopscotch}&title=${max}&_sort=price&_order=${sort}&q=${search}`
       }
      }
     }
    
     let res=await axios.get(url);
     dispatch({type:GET_KID_PRODUCTS_SUCCESS,payload:res.data})
    } catch (error) {
     dispatch({type:GET_PRODUCTS_ERROR});
    }
}