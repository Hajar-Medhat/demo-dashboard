import './App.css'
import Sidenav from './components/sidenavComponent/sidenav';
import Headerw from './components/fixedheaderComponent/Header';
import Secondbar from './components/secondbarComponent/Secondbar';
function App() {

  return (
    <>
    <div className="contanier">
    <Sidenav/>
    <div className="mini-contanier">
    <Headerw />
    <Secondbar/>

    </div>

    </div>
    </>
  )
}

export default App
