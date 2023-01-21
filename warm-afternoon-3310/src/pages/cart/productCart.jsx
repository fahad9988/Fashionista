import React, { useEffect, useState } from "react";

let api = "http://localhost:8080/cart"

const ProductCart = () => {
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);

      });
  }, [refresh]);
  //console.log(data)

  let removeProduct = async (id) => {
    let res = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    setRefresh(!refresh);
  };



  let handleInc = async (id,price,quantity)=>{
    
    let res = await fetch(`${api}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({quantity:quantity+1}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>res.json()).then(res=>{console.log(res)})
    console.log(id,api)
    setRefresh(!refresh)
  }



  let handleDec = async (id,price,quantity)=>{
    if(quantity==1){
      removeProduct(id)
    }else{
    let res = await fetch(`${api}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({quantity:quantity-1}),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>res.json()).then((res)=>{console.log(res);setRefresh(!refresh)})
    }
  }



  return (
    <div>
       <div style={{display:"flex"}}>
        <Box>
          {data.map((el,i)=>(
            <Box>
                <Box>
                  
                </Box>
            </Box>
          ))}
        </Box>
         {/* <div>
            <table style={{marginLeft:"100px",marginTop:"140px"}}>
                <tbody>
                    {
                        data && data.map((ele,ind)=>(
                         <tr key={ele.id} style={{border:"0px solid black",marginBottom:"70px"}}>
                          <td style={{border:"0px solid black"}}><img src={ele.images} style={{width:"70px",padding:"10px"}}/></td>
                          <td style={{border:"0px solid black",padding:"20px"}}>{ele.title}-{ele.subtitle}</td>
                          <td style={{border:"0px solid black",padding:"20px",paddingLeft:"40px",paddingRight:"40px"}}>{ele.price*ele.quantity}</td>
                          <td style={{border:"0px solid black",padding:"20px",paddingLeft:"40px",paddingRight:"40px"}}>
                            <button onClick={()=>handleDec(ele.id,ele.price,ele.quantity)}>-</button>
                            {ele.quantity}
                            <button onClick={()=>handleInc(ele.id,ele.price,ele.quantity)}>+</button>
                          </td>
                          <td onClick={() => removeProduct(ele.id)} style={{padding:"20px"}}><img style={{width:"25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAdFaUieedEJlbvDeIKey32AwowT31Ha5Q5OvKs-deMj4hHRBZwYx0oRRQOa8MDK7MgU&usqp=CAU"/></td>
                         </tr>
                        ))
                    }
                    
                </tbody>
            </table>
         </div> */}





         
         <div style={{border:"1px solid red",height:"600px",width:"400px",marginTop:"140px",marginLeft:"70px"}}>
            <div style={{display:"flex",border:"0px solid green",padding:"30px",fontSize:"20px",fontFamily:"sans-serif",gap:"140px",marginBottom:"20px"}}>
                <h1>SubTotal</h1>
                <h1>Total Price</h1>
            </div>
            <div style={{display:"flex",border:"0px solid green",padding:"30px",fontSize:"20px",fontFamily:"sans-serif",gap:"90px"}}>
                <h1>Delivery Charges</h1>
                <h1>Free</h1>
            </div>

            <button style={{backgroundColor:"#e40046",fontSize:"20px",fontFamily:"sans-serif",padding:"13px",marginTop:"30px",marginLeft:"70px"}}>
                PROCEED TO PAY value
            </button>

         </div>
       </div>
    </div>
  );
};

export default ProductCart;