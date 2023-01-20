import axios from "axios"


export const getCartAPI=async()=>{
    let res=await axios.get("http://localhost:8080/cart");
    return res.data;
}

// export const addCartAPI=async(item)=>{
//     let res=await axios.post(`http://localhost:8080/cart`,item)
//     return res.data;
// }


// export const removeCartApi=async(id)=>{
//     let res=await axios.delete(`http://localhost:8080/cart/${id}`)
//     return res.data;
// }