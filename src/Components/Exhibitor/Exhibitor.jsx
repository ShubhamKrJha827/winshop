import React from 'react'
import './Exhibitor.css'
import { Link } from 'react-router-dom'

function Exhibitor() {
  return (
    <>
    <div className='exhibitorcontact'>
      <div className='exhiimg'>
        <img src="https://static.wixstatic.com/media/708ac9175fde4664aafefb4480ac7c22.jpg/v1/fill/w_679,h_387,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Vineyard%203.jpg" alt="" />
      </div>
      <div className='exhibitorbox'>
          <h1>Exhibitors Profile</h1>
          <p>Our expo features a diverse array of exhibitors, ranging from <br /> established industry giants to innovative startups. Explore a <br /> curated selection of breweries, wineries, equipment <br /> manufacturers, and suppliers showcasing their products <br /> and services. Connect with experts and discover the latest <br /> advancements that are shaping the future of the craft <br /> beverage industry.

</p>
      </div>   
    </div>
    <div className='exhiparagrap'>
      <h1>Exhibitor Profile</h1>
       <p><li>Alcobev Brands</li></p>
       <p><li>Automation, Robotics & Control Systems</li></p>
       <p><li>Flavours / Hops / Malts / Chemicals / Extracts</li></p>
       <p><li>Glassware, Crockeries, Bar Refrigeration, Dispensing Equipment, Tools & Supplies</li></p>
       <p><li>Laboratory Equipment & Analytical Systems</li></p>
       <p><li>Manufacturers of Equipment, Technologies and Services for Alcohol Production</li></p>
       <p><li>POS, Apps & Inventory Management Softwares</li></p>
       <p><li>Industry Associations, Embassies, Training Institutes & Academia</li></p>
       <p><li>Warehouse, Distribution & Logistics</li></p>
       <p><li>Manufacturers of Equipment, Technologies and Services for Filling & Packaging</li></p>
   <div className='exhibackground'>
    <div className='exhi-mid'>
    <h1><li><Link to="/contact" style={{color:'yellow'}}>Registration</Link></li></h1>
    </div>
      
    </div>
    </div>
    
    </>
  )
}

export default Exhibitor
