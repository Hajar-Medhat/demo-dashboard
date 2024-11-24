import React from 'react'
import profilelogo from '../../../src/assets/profile.svg';
import '../../components/fixedheaderComponent/Header.css';

function Header() {
  return (
    <div className='header'>
        <p className='title'>IT Asset Management</p>
        <img  className="imgprofile" src={profilelogo} alt="" />
    </div>
  )
}

export default Header