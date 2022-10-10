import React, { useState, useEffect } from "react";
import Link from 'next/link'
import shortid from 'shortid';
const PesaPal = require('pesapal-node');
//import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

 function FormC4C()  {

    
    let pesapal = new PesaPal({
        sitename: 'C4HK Donations',
        key: "s9wWRUjVSuzqvZIoVDzxOsjgNdmWwoAR", // TODO: Use your own credentials!!
        secret: "fe9iGVCH8YkJGL9G5V1epBh7zrQ=",
        debug: true // false in production!
    });

 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [location, setLocation] = useState('');
    const [amount, setAmount] = useState('');
 
    function onChangeUsername(e) {
        setUsername(e.target.value);
        console.log(username)
    }
    function onChangeEmail(e) {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    function onChangePhonenumber(e) {
        setPhonenumber(e.target.value);
        console.log(e.target.value)
    }
    function onChangeLocation(e) {
        setLocation(e.target.value)
        console.log(location)
    }
    function onChangeAmount(e) {
        setAmount(e.target.value)
        console.log(amount)
    }
 
    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phonenumber', phonenumber);
        localStorage.setItem('location', location);
        localStorage.setItem('amount', amount);
    }

    let customer = pesapal.customerDetail({
        fistname: username,
        lastname: 'c4hk',
        email: email,
        phonenumber: phonenumber,
    });

    let order = pesapal.orderDetail({
        itemID: shortid.generate(),
        particulars: 'Donations for C4HK',
        quatity: '1',
        unitCost: amount,
        details: '<information about the order>'
    });
    let orders = [];
    orders.push(order);
    let postOrderUrl = pesapal.sendPostPesaPalDirectOrder({
        reference: shortid.generate(),
        customerDetails: customer,
        description:'Donations for C4HK',
        orders: orders
    }); 
var url = PesaPal.getPaymentURL(order, "http://mysite.co.ke/callback");
// send it to an iframe ?


    // const config = {
    //     public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    //     tx_ref: Date.now(),
    //     amount: amount,
    //     currency: location,
    //     payment_options: 'card,mobilemoney',
    //     customer: {
    //       email: email,
    //       phonenumber: phonenumber,
    //       name: username,
    //     },
    //     customizations: {
    //       title: 'CHFAK Donations',
    //       description: 'By donating to us, you provide shelter and education to our children.',
    //       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    //     },
    //   };

    //   const handleFlutterPayment = useFlutterwave(config);
 
    // function getData() {
    //    // eslint-disable-next-line react-hooks/rules-of-hooks
    //    useEffect(() => {
    //     console.log(localStorage.getItem('username'));
    //     console.log(localStorage.getItem('email'));
    //     console.log(localStorage.getItem('phonenumber'));
    //     console.log(localStorage.getItem('location'));
    //     console.log(localStorage.getItem('amount'));
    // }, [])
    // }
    return (
        <>
            
            
            <div className="formbg-outer">
               <div className="formbg">
                <div className="formbg-inner padding-horizontal--48">
                <span className="padding-bottom--15 spanner">Donate on our site</span>
                <form onSubmit={onSubmit}>
                <div className="field padding-bottom--24">
                    <label className="labelell" htmlFor="username">User name</label>
                    <input 
                            type="text"
                            //name="username"
                            value={username}
                            onChange={onChangeUsername}
                            placeholder="user name"
                            required 
                            />
                    </div>
                    <div className="field padding-bottom--24">
                    <label className="labelell" htmlFor="email">Email</label>
                    <input
                                type="email" 
                                //name="email"
                                value={email}
                                onChange={onChangeEmail} 
                                placeholder="name@example.com"
                                required
                                />
                    </div>
                    <div className="field padding-bottom--24">
                    <label className="labelell" htmlFor="phonenumber">Phone number</label>
                    <input 
                                type="text"
                               // name="phonenumber"
                                value={phonenumber} 
                                onChange={onChangePhonenumber}  
                                placeholder="phone number" 
                                required
                                />
                    </div>
                    
                    <div className="field padding-bottom--24">
                    <div className="grid--50-50">
                    <label className="labelell" htmlFor="location">location</label>
                        {/* <label htmlFor="password">Password</label> */}
                        {/* <div class="reset-pass">
                        <a href="#">Forgot your password?</a>
                        </div> */}
                    </div>
                    <select 
                    //name="location"
                                value={location}  
                                onChange={onChangeLocation}
                                style={{color: '#fff'}}
                                required
                                >
                                    <option className="form-control" style={{color: '#fff'}}  value="USD">United States</option>
                                    <option className="form-control" style={{color: '#fff'}} value="GBP">United Kingdom</option>
                                    <option className="form-control" style={{color: '#fff'}} value="AED">United Arab Emirates</option>
                                    <option className="form-control" style={{color: '#fff'}} value="KES">Kenya</option>
                                    </select>
                                    
                    {/* <input type="password" name="password"/> */}
                    </div>
                    <div className="field padding-bottom--24">
                    <label className="labelell" htmlFor="amount"> Amount  ({location})</label>
                    <input 
                                type="text"
                                //name="amount"
                                value={amount} 
                                onChange={onChangeAmount} 
                                placeholder="amount" 
                                required
                                />
                    </div>
                    {/* <div class="field field-checkbox padding-bottom--24 flex-flex align-center">
                    <label for="checkbox">
                        <input type="checkbox" name="checkbox"/> Stay signed in for a week
                    </label>
                    </div> */}
                    <div className="field padding-bottom--24">
                    <button 
                    type="submit"
                    style={{color: '#fff'}}
                            onClick={() => {
                                postOrderUrl();
                            // handleFlutterPayment({
                            //     callback: (response) => {
                            //     console.log(response);
                                
                            //         closePaymentModal() // this will close the modal programmatically
                            //     },
                            //     onClose: () => {},
                            // });
                            }}
                        >
                            Donate
                        </button>
                    {/* <Link href="/prodonations">
                    
                    <button type="submit">Continue</button>
                    {/* <input type="submit" onClick={getData} value="Continue"/> */}
                    {/* </Link>  */}
                    </div>
                    {/* <div class="field">
                    <a class="ssolink" href="#">Use single sign-on (Google) instead</a>
                    </div> */}
                </form>
                </div>
            </div>
            {/* <div class="footer-link padding-top--24">
                <span>Don't have an account? <a href="">Sign up</a></span>
                <div class="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                <span><a href="#">© Stackfindover</a></span>
                <span><a href="#">Contact</a></span>
                <span><a href="#">Privacy & terms</a></span>
                </div>
            </div> */}
        </div>
            
            
        </>
    );
};
 
export default FormC4C;