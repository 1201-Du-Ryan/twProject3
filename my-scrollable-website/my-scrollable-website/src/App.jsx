// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import HomeNavbar from './components/navbar_home';
// import AppRoutes from './Routes';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <HomeNavbar />
//         <AppRoutes />
//       </div>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import CreateServicePage from './pages/CreateServicePage';
import ServicePage from './pages/ServicePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/create-service" element={<CreateServicePage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
};

export default App;
