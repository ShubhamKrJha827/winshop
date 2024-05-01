import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='content'>
      <img src="https://static.wixstatic.com/media/a4e552_8fbc7212d3a84edda9928698e3ea22aa~mv2.png/v1/crop/x_0,y_1,w_359,h_342/fill/w_247,h_258,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a4e552_8fbc7212d3a84edda9928698e3ea22aa~mv2.png" alt="" />
        <ul className='Navlink'>
        <li><Link to="/home" style={{color:'blue'}}>Home</Link></li>
        <li><Link to="/about" style={{color:'blue'}}>About</Link></li>
        <li><Link to="/exhibitor"style={{color:'blue'}}>Exhibitor</Link></li>
        <li><Link to="/visitor"style={{color:'blue'}}>Visitor</Link></li>
        <li><Link to="/contact"style={{color:'blue'}}>Contact</Link></li>
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar
