import React from 'react'
import '../../components/windowComponent/window.css';
import fifth from '../../assets/adduser.svg';

function Window(props) {
  return (
    <div className={props.edit?"showedit":"hideedit"}>
      <div className="edit">   
                 <img src={fifth} alt="" />
                 {props.titletext}
                 </div>
  <label className ="lbedit" htmlFor="name">Name<input type="text" value={props.value} onChange={(e)=>props.setValue(e.target.value)}/>
  </label>
   <label className ="lbedit" htmlFor="email"> Email<input type="text" /></label>
<div className="btns">  <button className='no' onClick={()=>props.setEdit(!props.edit)}>cancel</button>
<button className="ok" >{props.text}</button></div>
</div>

  )
}

export default Window