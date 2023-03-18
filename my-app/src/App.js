import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Components/table/Home';
import About from './Components/table/About';
import Contact from './Components/table/Contact';
import Project from './Components/table/Project';
const App = () => {
  return (
   
  <>
   <BrowserRouter>
  
  <Header />
        
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/About" element={ <About/>}/>;
          <Route path="/Contact" element={ <Contact/>}/>;
          <Route path="/Project" element={ <Project/>}/>;
        </Routes>
        <Footer />
</BrowserRouter>
  </>
   
  );
};

export default App;



