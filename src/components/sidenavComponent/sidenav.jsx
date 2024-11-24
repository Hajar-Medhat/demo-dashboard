import React from 'react'
import menulogo from '../../../src/assets/menu.svg';
import dashboardlogo from '../../../src/assets/dashboard.svg';
import employeeslogo from '../../../src/assets/employees.svg';
import settinglogo from '../../../src/assets/setting.svg';
import inventorylogo from '../../../src/assets/inventory.svg';
import '../../components/sidenavComponent/sidenav.css';
function Sidenav() {
  return (
    <>
    <div className="navside">
    <img src={menulogo} alt="" />
    <br />
    <img src={dashboardlogo} alt="" />
    <img src={inventorylogo} alt="" />
    <img src={employeeslogo} alt="" />
    <img src={settinglogo} alt="" />

    </div>
    </>
  )
}

export default Sidenav