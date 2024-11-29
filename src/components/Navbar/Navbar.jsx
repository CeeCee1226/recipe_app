import React from 'react';
import './Navbar.css';
import { Images } from '../../assets/assets'; // Correct path to assets.js

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Images.icook} className="iCook" alt="iCook" />
      <div className="search">
        <input type="text" placeholder="Хоолны нэрээр хайх" />
        <button className="searchicon">
          <img src={Images.searchicon} alt="search-icon" />
        </button>
      </div>
      <button className="sigin">Нэвтрэх</button>
      <button className="signup">Бүртгүүлэх</button>
    </div>
  );
};

export default Navbar;
