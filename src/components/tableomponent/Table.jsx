import React from 'react'
import '../tableomponent/table.css'
import oneimg from '../../assets/view.svg';
import twoimg from '../../assets/edit.svg';
import threeimg from '../../assets/delete.svg';
import { useTable } from 'react-table';

 function Table(props) {
    const deleted=props.deleted;
    const columns=props.columns;
    const data =props.data;

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns,data});

  return (
    <div>    <table {...getTableProps()} ref={props.tableRef}>
    <thead>
      {headerGroups.map((headerGroup)=>(
      <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column)=>(
            <th {...column.getHeaderProps()}>
              <div className="selectall">
              <label htmlFor={column.render("Header")}>
                  {column.render("Header")!="Notes"?<input type="checkbox" style={{"width":"fit-content","margin-right":"1em"}}checked={ props.checked} onChange={() =>  props.setChecked(! props.checked)}/>:""}                                          
                        {column.render("Header")}
                    </label></div>
            </th>
          ))}
      </tr>

      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
{rows.map((row,index) => {
prepareRow(row);
if(deleted.indexOf(row.index)==-1)
return (
  <tr {...row.getRowProps()} key={index}>
    {row.cells.map((cell) =>(
  <td {...cell.getCellProps()}>
    <div className="sected">
    <label >{cell.render("Cell").props.cell.value!="-"?<input type="checkbox" checked={props.checked} style={{"width":"fit-content","margin-right":"1em"}} />:""}
    {(cell.render("Cell"))}</label></div>
  </td>))}
  <p className="hide"  onClick={e=>{props.handleToggleOption(e)}}>⠸
<div ><ul>
<li style={{"backgroundColor":"#EEF6FF","color":"#0038BA"}}>actions</li>
<li> <img src={oneimg} alt="" />view</li>
<li onClick={()=>{props.setEdit(!props.edit);props.setValue(props.data[row.index].Employee);props.setText("update");props.setTitleText('Edit a user')}}>  <img src={twoimg} alt="" />edit</li>
<li onClick={()=>props.setDeleted([...deleted,row.index])} style={{"backgroundColor":"#FFF2F0","color":"#E2341D"}}>
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
  )
}

export default Table