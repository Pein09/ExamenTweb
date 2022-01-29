import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from './Nav';
import About from './Components/About';
import Home from './Components/Home';
import Pages from './Components/Shelf';
import Carti from './Components/Books';



function App() {
  return <BrowserRouter>
  <Nav />
  <Routes>
   
  <Route path= "/"  element={<Home />} />
  <Route path= "/about"  element={<About  />} />
  <Route path= "/shelf"  element={<Pages />} />
  <Route path = "/books" element={<Carti />} />
  

   </Routes>
  
  </BrowserRouter>;
}

export default App;
