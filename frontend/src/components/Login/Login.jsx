import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { Images } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [authMode, setAuthMode] = useState("Бүртгүүлэх");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let endpoint = url;
    endpoint +=
      authMode === "Бүртгүүлэх" ? "/api/user/register" : "/api/user/login";

    try {
      const response = await axios.post(endpoint, formData);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{authMode}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={Images.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {authMode === "Бүртгүүлэх" && (
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
          {authMode === "Бүртгүүлэх" ? "Бүртгэл үүсгэх" : "Нэвтрэх"}
        </button>
        {authMode === "Бүртгүүлэх" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <span>I agree to the terms and conditions</span>
          </div>
        )}
        {authMode === "Бүртгүүлэх" ? (
          <p>
            Already have an account?{" "}
            <span onClick={() => setAuthMode("Нэвтрэх")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span onClick={() => setAuthMode("Бүртгүүлэх")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

Login.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Login;
