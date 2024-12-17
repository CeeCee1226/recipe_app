import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // No BrowserRouter here
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import FoodItem from './components/FoodItem/FoodItem';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddRecipe from './components/AddRecipe/AddRecipe'; // AddRecipe component for the page

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUserName, setCurrentUserName] = useState('');

  const handleLogin = (user) => {
    setCurrentUserName(user);
    setLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUserName('');
  };

  return (
    <div className="app">
      {/* Login screen only when showLogin is true and not logged in */}
      {showLogin && !loggedIn && <Login setShowLogin={setShowLogin} onLogin={handleLogin} />}
      
      {/* Main routes that are shown when logged in */}
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Home currentUserName={currentUserName} onLogout={handleLogout} />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // Render non-routed content for logged-out users
          <>
            <Route path="/" element={
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Navbar setShowLogin={setShowLogin} loggedIn={loggedIn} />
                </Grid>
                <Header />
                <FoodDisplay />
                <FoodItem />
                <Footer />
              </Grid>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
