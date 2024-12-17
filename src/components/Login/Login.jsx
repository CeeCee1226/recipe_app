import { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Images } from '../../assets/assets';

const Login = ({ setShowLogin, onLogin }) => {
  const [currState, setCurrState] = useState('Бүртгүүлэх');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = currState === 'Бүртгүүлэх' ? formData.name : formData.email;
    onLogin(user);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={Images.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === 'Бүртгүүлэх' && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {currState === 'Бүртгүүлэх' ? 'Бүртгэл үүсгэх' : 'Нэвтрэх'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <span>I agree to the terms and conditions</span>
        </div>
        {currState === 'Бүртгүүлэх' ? (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Нэвтрэх')}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Бүртгүүлэх')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Login;
