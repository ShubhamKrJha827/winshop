import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='body-contact'>
    <div className='contact-page'>
      <h1>Contact</h1>
      <div className='contact-page1'>
      <h4>NovaeXporium</h4>
      <h4>(A Astra Novae Network)</h4>
      <h4>Email:bwe@novaexporium.com</h4>
      <h4>call/WA:+918102001800</h4>
      </div>
      <div className='contact-page1'>
        <h4>N-161, Saira Tower, GF, Gautam Nagar</h4>
        <h4>Near Green Park Metro Gate No 2</h4>
        <h4>New Delhi, Delhi 110049 India</h4>
      </div>  
    </div>
    
    
    <div className="wrapper">
    <div className="title">
      Registration Form
    </div>
    <div className="form">
       <div className="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div className="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
       <div className="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div className="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
        <div className="inputfield">
          <label>Gender</label>
          <div className="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
        <div className="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
      <div className="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input"/>
       </div> 
      <div className="inputfield">
          <label>Message</label>
          <textarea class="textarea"></textarea>
       </div> 
      <div className="inputfield">
          <label>Postal Code</label>
          <input type="text" class="input"/>
       </div> 
      <div className="inputfield terms">
          <label className="check">
            <input type="checkbox"/>
            <span className="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div className="inputfield">
        <input type="submit" value="Register" className="btn"/>
      </div>
    </div>
   </div>
  
   </div>
   
   
    
  )
}

export default Contact
