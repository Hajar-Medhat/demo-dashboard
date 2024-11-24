import "../secondbarComponent/secondbar.css";
import vector from '../../../src/assets/vector.svg';
import search from '../../../src/assets/search.svg';
import one from '../../../src/assets/min1.svg';
import two from '../../../src/assets/minLaptop.svg';
import three from '../../../src/assets/minmob.svg';
import four from '../../../src/assets/minsim.svg';
import userlogo from '../../../src/assets/user.svg';
import userblogo from '../../../src/assets/userblack.svg';
import React from 'react'

function Secondbar() {
  return (
    <> 
        <div className="secondbar-cont">
<div className="toptext"><span>Inventory</span><img className="vector" src={vector} alt="" /></div> 
   <div className="searchsection">
   <img  className="search"src={search} alt="" />
    <input type="text" placeholder="Find a view"/>
   </div>
   <ul className="secondmenu">
    <li className="active" ><img className="vector" src={one} alt="" />
        Inventory</li>
    <br />
    <li><img className="vector" src={two} alt="" />Laptop </li>
    <li><img className="vector" src={three} alt="" />Mobile</li>
    <li><img className="vector" src={four} alt="" />SIM Card</li>
    <br />
    <li className="active"><img className="vector" src={userlogo} alt="" />All users</li>
    <br />
    <li > <img  className="vector" src={userblogo} alt="" />Resigned users</li>
   </ul>
   </div>
   

   </>

  )
}

export default Secondbar