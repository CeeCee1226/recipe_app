import React from 'react';
import { Images } from '../../assets/assets'; // Ensure the path to assets is correct
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>TEACH and LEARN <br />to COOK</h2>
        <p className='p'>
          Энэхүү сонирхолтой нийгэмлэгт  өөрийн <br /> хувь нэмрээ оруулан 
          хоолны жороо <br />хуваалцаж, бусдаас суралцаарай.
        </p>
      </div>
      <img src={Images.meal1} alt="Meal" />
    </div>
  );
}

export default Header;
