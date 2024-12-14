import './Navbar.css';
import { Images } from '../../assets/assets';
import PropTypes from 'prop-types';

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="navbar">
      <img src={Images.icook} className="iCook" alt="iCook" />
      <div className="search">
        <input type="text" placeholder="Хоолны нэрээр хайх" />
        <div className="searchicon">
          <img src={Images.searchicon} alt="search-icon" />
        </div>
      </div>
      <button className="signin" onClick={() => setShowLogin(true)}>Нэвтрэх</button>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;
