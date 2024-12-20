import './Navbar.css';
import { Images } from '../../assets/assets';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const {token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }
  return (
    <div className="navbar">
      <img src={Images.icook} className="iCook" alt="iCook" />
      <div className="search">
        <input type="text" placeholder="Хоолны нэрээр хайх" />
        <div className="searchicon">
          <img src={Images.searchicon} alt="search-icon" />
        </div>
      </div>
      <div>
        {!token ? (
          <button className="signin" onClick={() => setShowLogin(true)}>Нэвтрэх</button>
        ) : (
          <div className="navbar-profile">
            <img src={Images.account} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={Images.myrecipe} alt="" />
                <p>Жор</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={Images.logout_icon} alt="" />
                <p>Гарах</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Navbar;