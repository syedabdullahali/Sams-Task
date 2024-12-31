import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <ul className="nav-ul">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/farmhouses">FARM HOUSES</Link></li>
        <li><Link to="/explore">EXPLORE</Link></li>
        <li><Link to="/booknow">BOOK NOW</Link></li>
        <li><Link to="/aboutus">ABOUT US</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/testimonials">TESTIMONIALS</Link></li>
        <li><Link to="/facilities">FACILITIES</Link></li>
        <li><Link to="/contactus">CONTACT US</Link></li>
        <li><Link to="/invoice">INVOICE</Link></li>

      </ul>
    </div>
  )
}

export default Nav
