import './MyProfile.css';
import { Images } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'; // useNavigate for React Router v6
import Footer from '../Footer/Footer';

const MyProfile = () => {
  const navigate = useNavigate(); // React Router v6 navigation

  const onLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/logout'); // Using navigate for navigation
  };

  const sections = [
    { title: 'Жор нэмэх', icon: Images.addrecipe, route: '/AddRecipe' },
    { title: 'Миний жор', icon: Images.myrecipe, route: '/MyRecipe  ' },
    { title: 'Миний про', icon: Images.myprofile, route: '/MyProfile' },
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

      <div className="profile-content">
        <div className="form-section">
          <div className="container1">
            <img src={Images.profile} alt="Profile" />
            <button className='upload'>Зураг оруулах</button>
          </div>
          <form>
            <h2>Хувийн мэдээлэл:</h2>

            <input type="email" placeholder="И-мэйл хаяг" />
            <input type="text" placeholder="Овог" />
            <input type="text" placeholder="Нэр" />
            <textarea type="text" placeholder="Ажлын туршлага" />
            <input type="date" placeholder="Төрсөн он сар өдөр" />
            <input type="text" placeholder="Нэмсэн жорууд" />
            <button type="submit" className="save-button">
              Өөрчлөлтийг хадгалах
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;
