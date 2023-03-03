import React from 'react';
import { useState } from 'react';
import './Payment.css';
import img1 from '../../assets/card_img.png';
import Loading from "./Loading"
import Otp from "./Otp";
// import { Navigate } from 'react-router-dom';
// import PaymentSuccess from "./PaymentSuccess";
import { toast } from 'react-toastify';


const Payment = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [cardname, setCardname] = useState("");
    const [cardnumber, setCardnumber] = useState("");
    const [expmonth, setExpmonth] = useState("");
    const [expyear, setExpyear] = useState("");
    const [cvv, setCvv] = useState("");

    const IsValidate = () => {
        let isProceed = true;
        let errormessage = 'Please enter all the required fields';
        if(fullname === '') {
          isProceed = false;
          errormessage;
        }
        if(email === ""){
            isProceed = false;
            errormessage
        }
        if(address === ""){
            isProceed = false;
            errormessage
        }
        if(city === ""){
            isProceed = false;
            errormessage
        }
        if(state === ""){
            isProceed = false;
            errormessage
        }
        if(zip === "" || zip.length !== 6){
            isProceed = false;
            errormessage
        }
        if(cardname === ""){
            isProceed = false;
            errormessage
        }
        if(cardnumber === "" || cardnumber.length !== 16){
            isProceed = false;
            errormessage
        }
        if(expmonth === ""){
            isProceed = false;
            errormessage
        }
        if(expyear === "" || expyear < 2023){
            isProceed = false;
            errormessage
        }
        if(cvv === "" || cvv.length !== 3){
            isProceed = false;
            errormessage
        }
        if(!isProceed) {
            toast.warning(errormessage);
          } else {
            if(/^[a-zA-Z0-0]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){
                
            } else{
                isProceed = false;
                toast.warning("Please enter the valid email");
                console.log("Hello")
            }
          }
          return isProceed;
        }

const [loading, setLoding] = useState(false);
const [pay, setPay] = useState(false);


const handleClick = (e) => {
    e.preventDefault();
    if(IsValidate()) {
        setLoding(true)
        setTimeout(() => {
            setLoding(false)
            setPay(true)
        }, 4000);
    } 
}

       
if(pay){
    return <Otp/>
}

{if(loading){
    return <Loading/>
}}

    return(
        <div>
        <div className="container">
        

    <form action="" >

        <div className="row">

            <div className="col col1">

                <h3 className="title">Billing Address</h3>

                <div className="inputBox">
                    <span>Full Name :</span>
                    <input value={fullname} onChange={e => setFullname(e.target.value)} type="text" placeholder="Name" />
                </div>
                <div className="inputBox">
                    <span>Email :</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="example@example.com"/>
                </div>
                <div className="inputBox">
                    <span>Address :</span>
                    <input value={address} onChange={e => setAddress(e.target.value)} type="text" placeholder="room - street - locality"/>
                </div>
                <div className="inputBox">
                    <span>City :</span>
                    <input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="City"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>State :</span>
                        <input value={state} onChange={e => setState(e.target.value)} type="text" placeholder="State"/>
                    </div>
                    <div className="inputBox">
                        <span>Zip Code :</span>
                        <input value={zip} onChange={e => setZip(e.target.value)} type="text" placeholder="123456"/>
                    </div>
                </div>

            </div>

            <div className="col col2">

                <h3 className="title">Payment</h3>

                <div className="inputBox">
                    <span>Cards Accepted :</span>
                    <img src={img1} alt=""/>
                </div>
                <div className="inputBox">
                    <span>Name on Card :</span>
                    <input value={cardname} onChange={e => setCardname(e.target.value)} type="text" placeholder="Name on card"/>
                </div>
                <div className="inputBox">
                    <span>Credit Card Number :</span>
                    <input value={cardnumber} onChange={e => setCardnumber(e.target.value)} type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div className="inputBox">
                    <span>Exp month :</span>
                    <input value={expmonth} onChange={e => setExpmonth(e.target.value)} type="text" placeholder="month"/>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>Exp year :</span>
                        <input value={expyear} onChange={e => setExpyear(e.target.value)} type="number" placeholder="2023"/>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input value={cvv} onChange={e => setCvv(e.target.value)} type="text" placeholder="123"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="Proceed to Payment" className="submit-btn" onClick={handleClick}/>

    </form>

</div> 
</div>   
    )
}

export default Payment