import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyHeader from './my_header_menu/My_header'; // Renamed to PascalCase

import Home from './my_header_menu/home'; // Renamed to PascalCase
import Analysis from './my_header_menu/Analysis';
import About from './my_header_menu/about'; // Renamed to PascalCase
import Information from './my_header_menu/Information';
import Login from './my_header_menu/login';


import Product from './my_header_menu/product';
import Setting from './my_header_menu/setting';



function App() {
  return (
    <Router>
      {/* Imported Header */}
      <MyHeader />

      {/* Set up routes */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Route to Home page */}
        <Route path="/product" element={<Product />} />  {/* Route to Home page */}
        <Route path="/Analysis" element={<Analysis />} />  {/* Route to Analysis page */}
        <Route path="/about" element={<About />} />  {/* Route to About page */}
        <Route path="/Information" element={<Information />} />  {/* Route to Information page */}

        <Route path="/login" element={<Login />} />  {/* Route to Information page */}
        <Route path="/setting" element={<Setting />} />  {/* Route to Information page */}
        

     
      </Routes>
      
    </Router>
    

   
  );
  
}

export default App;


