import { useState } from 'react';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'; // Adjust the path based on your project structure
import FoodItem from './components/FoodItem/FoodItem';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

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
      {showLogin && <Login setShowLogin={setShowLogin} onLogin={handleLogin} />}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navbar
            setShowLogin={setShowLogin}
            loggedIn={loggedIn}
            currentUserName={currentUserName}
            onLogout={handleLogout}
          />
        </Grid>
        <Header />
        <FoodDisplay />
        <FoodItem />

        <Footer />
      </Grid>
    </div>
  );
};

export default App;
