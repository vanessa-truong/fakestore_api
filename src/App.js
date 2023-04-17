import './App.css';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
//pages&Components
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';




function App() {
  return (
    <div className="App">
    <Routes>
      //wo vergebe ich meinen useParams?
        <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<ProductDetails />} />
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>

    </div>
  );
}

export default App;
