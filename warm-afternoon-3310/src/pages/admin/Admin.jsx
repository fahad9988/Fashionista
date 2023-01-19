
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


let api = "http://localhost:8080/posts";

const Admin = () => {
  const [formData, setFormData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [refresh]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(formData),
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
  };

  let updateProduct =async (id)=>{
    const new_name = window.prompt("Enter new Product Name")
    const new_price = window.prompt("Enter new Price")
    const new_rating = window.prompt("Enter new Rating")
    const new_image = window.prompt("Enter new ImageUrl")
    
    let data = {price:new_price , rating:new_rating , name:new_name , image:new_image}
  
    let res = await fetch(`${api}/${id}`,{
        method : "PATCH",
        body : JSON.stringify(data),
        headers:{
            "Content-Type" : "application/json"
        }
    });
    
  }

  

  let removeProduct = async(id)=>{
    let res = await fetch(`${api}/${id}`,{
        method : "DELETE"
    }) 
  }

  

  let sortHtoL = async()=>{
    console.log("ok")
    let res = await fetch("http://localhost:8080/posts?_sort=price&_order=asc")
    let data = await res.json()
    setData(data);
  }

  let sortLtoH = async()=>{
    console.log("ok")
    let res = await fetch("http://localhost:8080/posts?_sort=price&_order=desc")
    let data = await res.json()
    setData(data);
  }

  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "40px",
        height:"auto",
        backgroundColor:"Cornsilk"
      }}>
      <div
        className="left_side"
        style={{
          width: "370px",
          border: "1px solid red",
          height: "auto",
          backgroundColor:"Cornsilk",
          marginLeft: "30px",
          position:"fixed"
        }}>
        <div className="form" style={{  border: "1px solid black" ,marginTop:"0px",borderRadius:"10px",backgroundColor:"white",margin:"auto"}}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Product Name"
              style={{ width: "300px", marginBottom: "7px", padding: "5px",marginTop:"10px",border:"1.5px solid black",marginLeft:"30px"}}
            />
            <input
              type="url"
              name="image"
              placeholder="Product Url"
              onChange={handleChange}
              style={{ width: "300px", marginBottom: "7px", padding: "5px" ,border:"1.5px solid black",marginLeft:"30px"}}
            />
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              onChange={handleChange}
              style={{ width: "300px", marginBottom: "7px", padding: "5px" ,border:"1.5px solid black",marginLeft:"30px"}}
            />
            <input
              type="number"
              name="rating"
              placeholder="Product Rating"
              onChange={handleChange}
              style={{ width: "300px", marginBottom: "7px", padding: "5px",border:"1.5px solid black" ,marginLeft:"30px"}}
            />

            <button
              type="submit"
              style={{
                width: "200px",
                marginBottom: "7px",
                padding: "5px",
                backgroundColor: "IndianRed",
                fontSize:"19px"
                ,marginLeft:"80px"
              }}>
              Add Product
            </button>
          </form>
        </div>

        <div className="filtering" style={{  border: "1px solid black" ,marginTop:"0px",borderRadius:"10px",backgroundColor:"white",height:"auto",marginTop:"40px"}}>
           <h1 style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"18px",fontWeight:"bold",marginLeft:"30px"}}>Sort By :- Price</h1>
           <h2 onClick={()=>sortHtoL()} style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"16px",marginLeft:"110px"}}>〇 Price: High To Low</h2>
           <h2 onClick={()=>sortLtoH()} style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"16px",marginLeft:"110px"}}>〇 Price: Low To High</h2>
           
        </div>

      </div>

      <div
        className="container"
        style={{
          width: "1000px",
          border: "0px solid red",
          height: "auto",
          backgroundColor:"Cornsilk",
          marginLeft:"450px"
        }}>
        <div
          style={{
            width: "1000px",
            border: "0px solid black",
            margin: "auto",
            height: "auto",
          }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",gap:"20px" }}>
            {data &&
              data.map((ele, ind) => (
                <div key={ind} style={{padding:"50px",border:"1px solid gray",backgroundColor:"white",marginTop:"3px",borderRadius:"10px"}}>
                  <img src={ele.image} style={{width:"200px",height:"280px",marginTop:"-40px"}}></img>
                  <h1 style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"20px"}}>{ele.name}</h1>
                  <h1 style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"20px",fontWeight:"bold"}}>₹ {ele.price}</h1>
                  <h1 style={{fontFamily:"sans-serif",marginTop:"10px",fontSize:"20px",fontWeight:"bold",color:"HotPink"}}>★ {ele.rating}</h1>
                  <div style={{border:"0px solid black",marginTop:"20px",marginBottom:"-30px",display:"flex",justifyContent:"space-between",width:"220px"}}>
                    <button onClick={()=>updateProduct(ele.id)} style={{padding:"6px",width:"100px",border:"1px solid black",backgroundColor:"black",color:"white"}}>Update</button>
                    <button onClick={()=>removeProduct(ele.id)} style={{padding:"6px",width:"100px",border:"1px solid black",backgroundColor:"black",color:"white"}}>Remove</button>
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
