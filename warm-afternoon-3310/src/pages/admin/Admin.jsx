import { useNavigate } from 'react-router';
import React from "react";
import { useEffect,useRef } from "react";
import { useState } from "react";
import "./Admin.css"
import { v4 } from 'uuid';
import { useToast } from 'react-toastify';
import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

let api = "https://snapdeal-json-server.onrender.com/kids";

const Admin = () => {
  const [formData, setFormData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  //const toast = useToast()
  //const toastIdRef = useRef()
  
  

  useEffect(() => {
    fetch("https://snapdeal-json-server.onrender.com/kids")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [refresh]);

  

  const handleSubmit = (event) => {
    let id = v4()
     event.preventDefault();
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
   const input4 = document.getElementById("input4").value;
   const input5 = document.getElementById("input5").value;
   const input6 = document.getElementById("input6").value;
   if (input1 === "" || input2 === "" || input3 === "" || input4 === "" || input5 === "" || input6 === "") {
    //window.alert("Please fill out all fields.");
    <Alert status='error'>
     <AlertIcon />
      There was an error processing your request
  </Alert>
  }
 else{
  
  fetch("https://snapdeal-json-server.onrender.com/kids", {
    method: "POST",
    body: JSON.stringify({...formData,id:id}),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRefresh(!refresh);
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    fetch("https://snapdeal-json-server.onrender.com/allProducts", {
    method: "POST",
    body: JSON.stringify({...formData,id:id}),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRefresh(!refresh);
      
    })
    .catch((error) => {
      console.error("Error:", error);
    });
 }
  };



  let updateProduct = async (id) => {
    const new_name = window.prompt("Enter new Product Name");
    const new_strikePrice = window.prompt("Enter new strikePrice");
    const new_price = window.prompt("Enter new Price");
    const new_discount = window.prompt("Enter new discount")
    const new_rating = window.prompt("Enter new Rating");
    const new_image = window.prompt("Enter new ImageUrl");

    let data = {
      price: new_price,
      rating: new_rating,
      subtitle: new_name,
      images: new_image,
      strike_price: new_strikePrice,
      discount : new_discount
    };

    let res = await fetch(`${api}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setRefresh(!refresh);
  };

  let removeProduct = async (id) => {
    let res = await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    setRefresh(!refresh);
  };

  let sortHtoL = async () => {
    console.log("ok");
    let res = await fetch("https://snapdeal-json-server.onrender.com/kids?_sort=price&_order=desc");
    let data = await res.json();
    setData(data);
    
  };

  let sortHightoLow = async () => {
    console.log("ok");
    let res = await fetch("https://snapdeal-json-server.onrender.com/kids?_sort=rating&_order=desc");
    let data = await res.json();
    setData(data);
    
  };

  let sortLtoH = async () => {
    console.log("ok");
    let res = await fetch(
      "https://snapdeal-json-server.onrender.com/kids?_sort=price&_order=asc"
    );
    let data = await res.json();
    setData(data);
    
  };

  let sortLowtoHigh = async () => {
    console.log("ok");
    let res = await fetch("https://snapdeal-json-server.onrender.com/kids?_sort=rating&_order=asc");
    let data = await res.json();
    setData(data);
    
  };

  const handleChange = (event) => {
     if (event.target.name === "price" || event.target.name === "rating"){
      setFormData({ ...formData, [event.target.name]: +event.target.value });
    }
    
    else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  function userHandle(){
    navigate('/usersdata')
  }

  

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "0px",
        height: "auto",
        backgroundColor: "white",
        width:"100%",
        className:"rev_container"
      }}>
      <div
        className="left_side"
        style={{
          width: "370px",
          border: "0px solid red",
          height: "700px",
          backgroundColor: "white",
           marginLeft: "20px",
          // position:"fixed"
          marginTop: "20px",
        }}>
        <div
          className="form"
          style={{
            border: "0px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            margin: "auto",
            width:"370px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            className:"rev_form",
            paddingTop:"20px"
           
          }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="subtitle"
              onChange={handleChange}
              placeholder="Product Name"
              id="input1"
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                marginTop: "10px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
                
              }}
            />
            <input
              type="url"
              name="images"
              placeholder="Product Url"
              id="input2"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
              }}
            />
            <input
              type="number"
              name="strike_price"
              placeholder="Discount Price"
              id="input3"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
              }}
            />
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              id="input4"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
              }}
            />
            <input
              type="text"
              name="discount"
              placeholder="Discount Percentage"
              id="input5"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
              }}
            />
            
            <input
              type="number"
              name="rating"
              placeholder="Product Rating"
              id="input6"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "10px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
                borderRadius:"5px"
              }}
            />

            <button
              type="submit"
              style={{
                width: "200px",
                marginBottom: "20px",
                padding: "5px",
                backgroundColor: "#E40046",
                fontSize: "19px",
                marginLeft: "80px",
                color:"white",
                marginTop:"10px"
              }}>
              Add Product
            </button>
          </form>
        </div>

        <div
          className="filtering"
          style={{
            border: "0px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "auto",
            marginTop: "40px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            paddingTop:"10px",
            paddingBottom:"20px"
          }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "30px",
              
            }}>
            Sort By :- Price
          </h1>
          <h2
            onClick={() => sortHtoL()}
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "16px",
              marginLeft: "110px",
              cursor:"pointer"
            }}>
            〇 Price: High To Low
          </h2>
          <h2
            onClick={() => sortLtoH()}
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "16px",
              marginLeft: "110px",
              cursor:"pointer"
            }}>
            〇 Price: Low To High
          </h2>
        </div>

        <div
          className="filtering"
          style={{
            border: "0px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "auto",
            marginTop: "40px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            paddingTop:"10px",
            paddingBottom:"20px"
          }}>
          <h1
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              marginLeft: "30px",
            }}>
            Sort By :- Rating
          </h1>
          <h2
            onClick={() => sortHightoLow()}
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "16px",
              marginLeft: "110px",
              cursor:"pointer"
            }}>
            〇 Price: High To Low
          </h2>
          <h2
            onClick={() => sortLowtoHigh()}
            style={{
              fontFamily: "sans-serif",
              marginTop: "10px",
              fontSize: "16px",
              marginLeft: "110px",
              cursor:"pointer"
            }}>
            〇 Price: Low To High
          </h2>
        </div>

        <div>
           
          <button style={{
                width: "350px",
                marginBottom: "7px",
                padding: "5px",
                backgroundColor: "#E40046",
                fontSize: "19px",
                marginLeft: "10px",
                marginTop:"50px",
                color:"white",
                
              }}
               onClick={userHandle}
              >Go To Users Data →</button>
           
        </div>
      </div>

      <div
        className="container"
        style={{
          width: "600px",
          border: "0px solid red",
          height: "auto",
          backgroundColor: "white",
           marginLeft: "-300px",
          marginTop: "12px",
          
        }}>
        <div
          style={{
            width: "600px",
            border: "0px solid black",
            margin: "auto",
            height: "auto",
          }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "10px",
              className:"reva_prod"
            }}>
            {data &&
              data.map((ele, ind) => (
                <div className='revati'
                  key={ind}
                  style={{
                    padding: "7px",
                    border: "0px solid gray",
                    backgroundColor: "white",
                    marginTop: "10px",
                    height:"400px"
                  }}>
                  <img
                    src={ele.images}
                    style={{
                      width: "200px",
                      height: "220px",
                     //marginTop: "-40px",
                      marginLeft: "10px",
                    }}></img>
                    <div>
                      <div style={{display:"flex"}} >
                      
                    <h1
                     style={{
                       fontFamily: "sans-serif",
                      // marginTop: "10px",
                       fontSize: "14px",
                       marginLeft: "16px",
                       margin:"auto",
                       color:"#666666"
                     }}>
                       {ele.subtitle}
                    </h1>
                      </div>
                  </div>
                    <div style={{display:"flex"}}>
                     <h1
                      style={{
                        fontFamily: "sans-serif",
                        marginTop: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginLeft: "16px",
                        color:"#CCCCCC",
                        textDecoration: "line-through"
                      }}>
                         ₹{ele.strike_price}
                     </h1>
                     <h1
                      style={{
                        fontFamily: "sans-serif",
                        marginTop: "10px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginLeft: "30px",
                      
                      }}>
                        ₹ {ele.price}
                     </h1>
                     <button style={{color:"#999999",border:"1px solid #999999",fontSize:"10px",marginTop:"14px",marginLeft:"20px",marginBottom:"25px"}}>
                      {ele.discount}
                      </button>
                  </div>
                  
                  <h1
                    style={{
                      fontFamily: "sans-serif",
                      marginTop: "0px",
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "HotPink",
                      marginLeft: "17px",
                      display:"flex"
                    }}>
                    <span><img style={{width:"50px"}} src="https://www.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1894989967.jpg"/></span><span>{ele.rating}</span>
                  </h1>
                  
                  <div
                    style={{
                      border: "0px solid black",
                      marginTop: "20px",
                      marginBottom: "-30px",
                      display: "flex",
                      justifyContent: "space-between",
                      width: "220px",
                    }}>
                    <button
                      onClick={() => updateProduct(ele.id)}
                      style={{
                        padding: "6px",
                        width: "100px",
                        border: "1px solid #E40046",
                        backgroundColor: "#E40046",
                        color: "white",
                      }}>
                      Update
                    </button>
                    <button
                      onClick={() => removeProduct(ele.id)}
                      style={{
                        padding: "6px",
                        width: "100px",
                        border: "1px solid #E40046",
                        backgroundColor: "#E40046",
                        color: "white",
                      }}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Admin;
