// import React from 'react';
// import HomeNavbar from '../components/navbar_home';

// const LandingPage = () => {
//   return (
//     <div>
//       <HomeNavbar />
//       <h1>Welcome to the Landing Page</h1>
//     </div>
//   );
// };

// export default LandingPage;


import HomeNavbar from '../components/navbar_home';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'; 

const LandingPage = () => {
  const categories = [
    "Tech",
    "Finance",
    "Marketing",
    "Design",
    "Writing",
    "Business",
    "Lifestyle",
    "Music",
    "Data",
    "Programming",
  ];

  const navigate = useNavigate();

  return (
    <div className="landing-page">
        <HomeNavbar />
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search services" />
        </div>
        <div className="auth-buttons">
          <button className="sign-in" onClick={() => navigate('/sign-in')}>Sign In</button>
          <button className="register" onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>
      <main className="main-content">
        <aside className="sidebar">
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index} className="category-item">
                <span className="category-icon">A</span>
                <span className="category-name">{category}</span>
                <input type="checkbox" checked readOnly />
              </li>
            ))}
          </ul>
        </aside>
        <section className="content-section">
          <div className="content-header">
            <h1>Heading</h1>
            <h2>Subheading</h2>
            <p>
              Welcome to our website. Please select from one of our categories or search for a service.
            </p>
          </div>
          <div className="content-items">
            {categories.map((category, index) => (
              <div key={index} className="content-item">
                <div className="avatar">
                  <img
                    src={`https://via.placeholder.com/50?text=A`}
                    alt="Avatar"
                  />
                </div>
                <div className="item-text">
                  <p className="item-title">List item</p>
                  <p className="item-description">
                    Cool description for the category
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
