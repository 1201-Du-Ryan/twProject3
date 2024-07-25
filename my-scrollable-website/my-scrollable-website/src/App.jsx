// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeNavbar from './components/navbar_home';
import AppRoutes from './Routes';

const App = () => {
  return (
    <Router>
      <div className="App">
        <HomeNavbar />
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
