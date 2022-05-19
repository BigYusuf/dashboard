
import './App.css';
import Home from './pages/Home/Home';
import ProductList from './pages/Products/ProductList';
import NewProduct from './pages/Products/NewProduct';
import Product from './pages/Products/Product';
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
            <Route path="products/*" element= {<ProductList/>}/>
            <Route path="product/:id*" element= {<Product/>}/>
            <Route path="Newproduct/*" element= {<NewProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
};
export default App;