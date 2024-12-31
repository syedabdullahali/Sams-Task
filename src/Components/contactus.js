import React from 'react'

const Contactus = () => {
  return (
    <div className='App'>
      <img src="./Images/contact1.jpg" alt='' className='image2' />
      <div className='contact'>Contact Us</div>
      <div className='number'>  <i class="bi bi-telephone"></i>   9505932535</div>
      <div className='mail'> <i class="bi bi-envelope"></i>   hello@mayifarms.com</div>
      <div className='insta'> <i class="bi bi-instagram"></i> Mayifarms</div>
      <div className='nature'>Experience <br />the vibe of <br />nature</div>
      <div className='top-right5'>
        <input className='inputBox' type="text" placeholder="Your Name" />
        <input className='inputBox' type="text" placeholder="Message" />
        <input className='inputBox' type="text" placeholder="Contact" />
      </div>
      <div className='top-dial'>
        <i className="bi bi-telephone-inbound"></i><br />
      </div>
      <div className="centered-one">Our team shall get in touch</div>
    </div>
  )
}

export default Contactus;

