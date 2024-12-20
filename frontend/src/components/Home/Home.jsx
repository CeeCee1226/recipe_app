import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/assets';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = ({ onLogout }) => {
  const navigate = useNavigate();

  const sections = [
    { title: 'Жор нэмэх', icon: Images.addrecipe, route: './AddRecipe' },
    { title: 'Миний жор', icon: Images.myrecipe },
    { title: 'Миний про', icon: Images.myprofile, route: './MyProfile'},
  ];

  const handleSectionClick = (route) => {
    if (route) navigate(route);
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <img src={Images.icook} className="iCook" alt="iCook" />
        <div className="search">
          <input type="text" placeholder="Хоолны нэрээр хайх" />
          <div className="searchicon">
            <img src={Images.searchicon} alt="search-icon" />
          </div>
        </div>
        <button className="signout" onClick={onLogout}>
          Гарах
        </button>
      </div>

      <div className="header-sections-row">
        {sections.map((section, index) => (
          <div
            key={index}
            className="section-card"
            onClick={() => handleSectionClick(section.route)}
          >
            <img src={section.icon} alt={section.title} className="section-icon" />
            <p className="section-title">{section.title}</p>
          </div>
        ))}
      </div>

      <div className="food-section">
        <div className="food-display">
          <FoodDisplay />
        </div>
        <Footer />
      </div>
    </div>
  );
};

Home.propTypes = {
  onLogout: PropTypes.func.isRequired, 
};

export default Home;
