import './App.css'
import Sidenav from './components/sidenavComponent/sidenav';
import Headerw from './components/fixedheaderComponent/Header';
import Secondbar from './components/secondbarComponent/Secondbar';
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

// const [show, setShow] = useState("hide");
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
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup)=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column)=>(
              <th {...column.getHeaderProps()}>
               {column.render("Header")}
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
      {cell.render("Cell")}
    </td>))}
    <p className="hide"  onClick={e=>handleToggleOption(e)}>⠸
<div ><ul>
  <li style={{"backgroundColor":"#EEF6FF","color":"#0038BA"}}>actions</li>
  <li> <img src={oneimg} alt="" />view</li>
  <li> <img src={twoimg} alt="" />edit</li>
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
    </div>

    </div>
    </>
  )
}

export default App
