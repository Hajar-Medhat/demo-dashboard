import React from 'react'
import'../featbarComponent/featbar.css'
import userblogo from '../../../src/assets/userblack.svg';
import excellogo from '../../../src/assets/excel.svg';
import first from '../../../src/assets/dop.svg';
import second from '../../../src/assets/filter.svg';
import third from '../../../src/assets/sort.svg';
import fourth from '../../../src/assets/sowhide.svg';
import fifth from '../../../src/assets/adduser.svg';
import logo6 from '../../../src/assets/searchblue.svg';

function Featbar(props) {
  return (
    <div className='contain-feat'>
        <ul className='featuls'>
            <li>
                <img src={userblogo} alt="" />
                All users  <img src={first} alt="" style={{"marginLeft":"1em"}} />
            </li>
            <li>
            <img src={second} alt="" />
                Filter
            </li>
            <li><img src={third} alt="" />
            sort</li>
            <li><img src={fourth} alt="" />
                Show & Hide columns
            </li>
            <li onClick={()=>{props.setEdit(!props.edit);props.setText("add user");props.setTitleText("Add a user");props.setValue("")}}>
            <img src={fifth} alt="" />
             Add a new user
            </li>
            <li>
                <img src={logo6} alt="" style={{"marginRight":"-2.7em","zIndex":"0"}} />
                <input className='seachnav' type="text" placeholder='Search Device, Employee Name, Employee ID .. etc' />
            </li>
            <li>
                <img src={excellogo} alt="" />
            </li>
        </ul>
    </div>
  )
}

export default Featbar