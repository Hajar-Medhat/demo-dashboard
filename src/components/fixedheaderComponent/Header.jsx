import React from 'react'
import profilelogo from '../../../src/assets/profile.svg';
import notiflogo from '../../../src/assets/notifications.svg';
import '../../components/fixedheaderComponent/Header.css';

function Header() {
  return (
    <>
    <div className='header'>
        <p className='title'>IT Asset Management</p>
        <div className="userprofile">
            <div className="not">
                <img src={notiflogo} alt="" />
               <span>5</span>
            </div>
        <img  className="imgprofile" src={profilelogo} alt="" />

        </div>
    </div>
    </>
  )
}

export default Header