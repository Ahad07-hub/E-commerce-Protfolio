
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Home from './Components/Home';
import 'aos/dist/aos.css';
import Threepl from './Components/Our Services/Threepl';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Aboutus from './Components/About us/About'
import AmazonFba from './Components/Our Services/Amazon whole FBA service/AmazonFba';
import Onlineretail from './Components/Our Services/Online Arbitrage/Onlineretail';
import Amzmanage  from './Components/Our Services/Amazon management/Amzmanage'

function App() {
  return (
    <div className="App">
      <Router>
  
       <Navbar/>
       <Routes>
        <Route  path="/" Component={Home} />
        <Route  path="About-us" Component={Aboutus} />
        <Route  path="3PL-warehouse" Component={Threepl} />
        <Route  path="Amazon-Wholesale-FBA" Component={AmazonFba} />
        <Route  path="Online-Arbitrage" Component={Onlineretail} />
        <Route  path="Amazon-Full-Account-Management-Services" Component={Amzmanage} />
       
       </Routes>
       <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
