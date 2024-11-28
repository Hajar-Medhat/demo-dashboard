import './App.css'
import Sidenav from './components/sidenavComponent/sidenav';
import Featbar from './components/featbarComponent/Featbar';
import Headerw from './components/fixedheaderComponent/Header';
import Secondbar from './components/secondbarComponent/Secondbar';
import Window from './components/windowComponent/Window';
import Table from './components/tableomponent/Table.jsx';
import { useState } from 'react';
import userDate from './userdata.json'
import {  useMemo } from 'react';
import { useRef } from 'react';


function App() {
  
  const tableRef = useRef(null);

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


// const [Data,setData]=useState(data)
const [titletext,setTitleText]=useState("")
const [text,setText]=useState("")
const [deleted, setDeleted] = useState(['*']);
const [checked, setChecked] = useState(false);
const [value,setValue] = useState();
const [edit, setEdit] = useState(false);
const handleToggleOption = (e) => {
  if(e.target.className=="hide"){
  e.target.className="show";}
  else{
    e.target.className="hide";
  }
};
// const updateAndadd = (value) => {
//   const newdata ={
//         "Empolyee":value,
//         "Notes":"-"
//     }
//   setData(newdata);
// };

  return (
    <>
    <div className="contanier">
    <Sidenav/>
    <div className="mini-contanier">
    <Headerw />
    <div className="cont-with-table">
    <Secondbar/>
    <div className="withnot-secondnav">
      <Featbar tableRef={tableRef}setTitleText={setTitleText} setText={setText} edit={edit} setEdit={setEdit} setValue={setValue}/>
      <Table tableRef={tableRef} deleted={deleted} setDeleted={setDeleted} checked={checked} data={data} columns={columns} setChecked={setChecked}   setTitleText={setTitleText} setText={setText} handleToggleOption={handleToggleOption} edit={edit} setEdit={setEdit} setValue={setValue}/>


    </div>
    </div>
    </div>
     <Window  edit={edit} value={value} setValue={setValue} setEdit={setEdit} text={text} titletext={titletext} />
    </div>
    </>
  )
}

export default App
