import { useNavigate } from 'react-router';
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let api = "https://snapdeal-json-server.onrender.com/kids";

const Admin = () => {
  const [formData, setFormData] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://snapdeal-json-server.onrender.com/kids")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [refresh]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://snapdeal-json-server.onrender.com/kids", {
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

  let updateProduct = async (id) => {
    const new_name = window.prompt("Enter new Product Name");
    const new_price = window.prompt("Enter new Price");
    const new_rating = window.prompt("Enter new Rating");
    const new_image = window.prompt("Enter new ImageUrl");

    let data = {
      price: new_price,
      rating: new_rating,
      name: new_name,
      images: new_image,
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
    // else if(event.target.name === "image"){
    //   setFormData({ ...formData, [event.target.name]: [...event.target.value] });
    // }
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
        backgroundColor: "Cornsilk",
      }}>
      <div
        className="left_side"
        style={{
          width: "370px",
          border: "1px solid red",
          height: "650px",
          backgroundColor: "Cornsilk",
          marginLeft: "20px",
          // position:"fixed"
          marginTop: "120px",
        }}>
        <div
          className="form"
          style={{
            border: "1px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            margin: "auto",
          }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Product Name"
              style={{
                width: "300px",
                marginBottom: "7px",
                padding: "5px",
                marginTop: "10px",
                border: "1.5px solid black",
                marginLeft: "30px",
              }}
            />
            <input
              type="url"
              name="images"
              placeholder="Product Url"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "7px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
              }}
            />
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "7px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
              }}
            />
            <input
              type="number"
              name="rating"
              placeholder="Product Rating"
              onChange={handleChange}
              style={{
                width: "300px",
                marginBottom: "7px",
                padding: "5px",
                border: "1.5px solid black",
                marginLeft: "30px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "200px",
                marginBottom: "7px",
                padding: "5px",
                backgroundColor: "IndianRed",
                fontSize: "19px",
                marginLeft: "80px",
              }}>
              Add Product
            </button>
          </form>
        </div>

        <div
          className="filtering"
          style={{
            border: "1px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "auto",
            marginTop: "40px",
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
            }}>
            〇 Price: Low To High
          </h2>
        </div>

        <div
          className="filtering"
          style={{
            border: "1px solid black",
            marginTop: "0px",
            borderRadius: "10px",
            backgroundColor: "white",
            height: "auto",
            marginTop: "40px",
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
            }}>
            〇 Price: Low To High
          </h2>
        </div>

        <div>
           
          <button style={{
                width: "350px",
                marginBottom: "7px",
                padding: "5px",
                backgroundColor: "black",
                fontSize: "19px",
                marginLeft: "10px",
                marginTop:"50px",
                color:"white",
                
              }}
               onClick={userHandle}
              >Users Data</button>
           
        </div>
      </div>

      <div
        className="container"
        style={{
          width: "900px",
          border: "0px solid red",
          height: "auto",
          backgroundColor: "Cornsilk",
          marginLeft: "-300px",
          marginTop: "120px",
        }}>
        <div
          style={{
            width: "1000px",
            border: "0px solid black",
            margin: "auto",
            height: "auto",
          }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}>
            {data &&
              data.map((ele, ind) => (
                <div
                  key={ind}
                  style={{
                    padding: "50px",
                    border: "1px solid gray",
                    backgroundColor: "white",
                    marginTop: "3px",
                    borderRadius: "10px",
                  }}>
                  <img
                    src={ele.images}
                    style={{
                      width: "200px",
                      height: "250px",
                      marginTop: "-40px",
                      marginLeft: "10px",
                    }}></img>
                  <h1
                    style={{
                      fontFamily: "sans-serif",
                      marginTop: "10px",
                      fontSize: "20px",
                      marginLeft: "20px",
                      margin:"auto"
                    }}>
                    {ele.subtitle}
                  </h1>
                  <h1
                    style={{
                      fontFamily: "sans-serif",
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginLeft: "80px",
                    }}>
                    ₹ {ele.price}
                  </h1>
                  <h1
                    style={{
                      fontFamily: "sans-serif",
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "HotPink",
                      marginLeft: "90px",
                    }}>
                    ★ {ele.rating}
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
                        border: "1px solid black",
                        backgroundColor: "black",
                        color: "white",
                      }}>
                      Update
                    </button>
                    <button
                      onClick={() => removeProduct(ele.id)}
                      style={{
                        padding: "6px",
                        width: "100px",
                        border: "1px solid black",
                        backgroundColor: "black",
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
