import './App.css'
import Sidenav from './components/sidenavComponent/sidenav';
import Featbar from './components/featbarComponent/Featbar';
import Headerw from './components/fixedheaderComponent/Header';
import Secondbar from './components/secondbarComponent/Secondbar';
import fifth from './assets/adduser.svg';
import userDate from './userdata.json'
import { useTable } from 'react-table';
import { useMemo, useState } from 'react';
import oneimg from './assets/view.svg'
import twoimg from './assets/edit.svg'
import threeimg from './assets/delete.svg'

function App() {
const data =useMemo(()=>userDate,[]);
const columns = useMemo(()=>[
  {
    Header:"Empolyee",
    accessor:"Employee",
  },
  { 
    Header:"Notes",
    accessor:"Notes",
  },
],[]);

const [checked, setChecked] = useState(false);
const [edit, setEdit] = useState(false);
const handleToggleOption = (e) => {
  if(e.target.className=="hide"){
  e.target.className="show";}
  else{
    e.target.className="hide";
  }
};

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});
  return (
    <>
    <div className="contanier">
    <Sidenav/>
    <div className="mini-contanier">
    <Headerw />
    <div className="cont-with-table">
    <Secondbar/>
    <div className="withnot-secondnav">
      <Featbar/>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup)=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column)=>(
              <th {...column.getHeaderProps()}>
                <div className="selectall">
                <label htmlFor={column.render("Header")}>
                    {column.render("Header")!="Notes"?<input type="checkbox" style={{"width":"fit-content","margin-right":"1em"}} checked={checked} onChange={() => setChecked(!checked)}/>:""}                                          
                          {column.render("Header")}
                      </label></div>
              </th>
            ))}
        </tr>

        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
{rows.map((row) => {
  prepareRow(row);
  return (
    <tr {...row.getRowProps()}>
      {row.cells.map((cell) =>(
    <td {...cell.getCellProps()}>
      <div className="sected">
      <label >{cell.render("Cell").props.cell.value!="-"?<input type="checkbox" checked={checked} style={{"width":"fit-content","margin-right":"1em"}} />:""}
      {(cell.render("Cell"))}</label></div>
    </td>))}
    <p className="hide"  onClick={e=>handleToggleOption(e)}>⠸
<div ><ul>
  <li style={{"backgroundColor":"#EEF6FF","color":"#0038BA"}}>actions</li>
  <li> <img src={oneimg} alt="" />view</li>
  <li onClick={()=>setEdit(!edit)}>  <img src={twoimg} alt="" />edit</li>
  <li style={{"backgroundColor":"#FFF2F0","color":"#E2341D"}}>
    <img src={threeimg} alt="" />
    delete</li>
</ul>
  </div>   
   </p>
    </tr>
  );
})}
      </tbody>
    </table>

    </div>
    <div className={edit?"showedit":"hideedit"}>
      <div className="edit">   
                 <img src={fifth} alt="" />
                 Edit a user
                 </div>
  <label className ="lbedit" htmlFor="name">Name<input type="text" />
  </label>
   <label className ="lbedit" htmlFor="email"> Email<input type="text" /></label>
<div className="btns">  <button className='no' onClick={()=>setEdit(!edit)}>cancel</button>
<button className="ok">Add Use</button></div>
</div>

    </div>
    </div>

    </div>
    </>
  )
}

export default App
