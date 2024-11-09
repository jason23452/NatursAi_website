import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MyHeader from './my_header_menu/My_header'; // Header component

import Home from './my_header_menu/home'; // Home page component
import Meal_planning from './my_header_menu/Meal_planning';
import About from './my_header_menu/about'; // About page component
import Information from './my_header_menu/Information';
import Login from './my_header_menu/login';

import Product from './my_header_menu/product';
import Profile from './my_header_menu/profile';

// Custom hook to handle scroll-to-top behavior for navigation and browser actions
function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on route changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Scroll to top when browser back/forward buttons are clicked
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };

    // Attach event listener for popstate (back/forward navigation)
    window.addEventListener('popstate', handlePopState);

    // Cleanup event listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}

function App() {
  useScrollToTop(); // Apply scroll-to-top behavior

  return (
    <>
      {/* Global Header */}
      <MyHeader />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Meal_planning" element={<Meal_planning />} />
        <Route path="/about" element={<About />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
