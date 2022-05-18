
import './App.css';
import Home from './pages/Home/Home';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
            <Route path="/" element= {<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};
export default App;