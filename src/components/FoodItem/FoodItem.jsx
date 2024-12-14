import PropTypes from 'prop-types';
import './FoodItem.css';

const FoodItem = ({ name, description, image, button }) => {
  return (
    <div className="food-item">
      <img className="food-item-image" src={image} alt={name} />
      <p className="food-item-name">{name}</p>
      <span className="food-rating">⭐⭐⭐⭐⭐</span>
      <p className="food-item-desc">{description}</p>
      <button className="btn">{button || "Харах"}</button>
    </div>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  button: PropTypes.string
};

export default FoodItem;
