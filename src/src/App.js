import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use HashRouter
import Navbars from './component/navbar/Navbar';
import Footers from './component/navbar/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spapage from './pages/spapage';
import Login from './pages/Login'; // Import Login page
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Navbars />
      <Footers />
      <SPA />
      <Router>
        <Routes>  {/* Define routes for different pages */}
          <Route path="/page" element={<SPA />} />  {/* Home Page */}
          <Route path="/login" element={<Login />} />  {/* Login Page */}
          <Route path="/register" element={<Register />} />  {/* Register Page */}
        </Routes>
      </Router>
    </>
  );
};

export default App;