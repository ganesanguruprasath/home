import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbars from './component/navbar/Navbar';
import Footers from './component/navbar/Footer';

import Spapage from './pages/spapage';
import Login from './pages/Login'; // Import Login page
import Register from './pages/Register';
import Routing from './routes/Routes';

const App = () => {
  return (
    <Router>
      <Navbars />
      <div>
        <Routing />
      </div>
      <Footers />
    </Router>
  );
};

export default App;