import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='contact-info'>
         <div className="container-fluid">


           <div className="row">
           <img src='' alt=''/>
           <div className="contact-content">
              <div className="contact-title">
              Phone
              </div>
              <div className="contact-text">
               +91 111 567 8765
              </div>
           </div>
           </div>


           <div className="row">
           <img src='' alt=''/>
           <div className="contact-content">
              <div className="contact-title">
              Email
              </div>
              <div className="contact-text">
               maahiisingh3@gmail.com
              </div>
           </div>
           </div>

           
           <div className="row">
           <img src='' alt=''/>
           <div className="contact-content">
              <div className="contact-title">
              Address
              </div>
              <div className="contact-text">
               825301 Jharkhand
              </div>
           </div>
           </div>

         </div>

         <div className="contact-box">
         
         <h2>Get In Touch</h2>
          <div className="contact-heading">
         
          <div className="contact-form">
           <div className="contact-info-box">
           <input text="name"  classsName="contact-form-name" name='name' placeholder='Your name' required="true"/>
           </div>

           <div className="contact-info-box">
           <input text="email"  classsName="contact-form-email" name='email' placeholder='Your email' required="true"/>
           </div>

           <div className="contact-info-box">
           <input text="number"  classsName="contact-form-number" name='number' placeholder='Your Phone no' required="true"/>
           </div>

          </div>

          </div>

          <div className="contact-form-text">
          <textarea className='text-field' placeholder='Message' cols="30" rows="10"></textarea>
          </div>

          <div className="contact-form-button">
           <button type='sumbit' className='contact-button'>Send Message</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Contact