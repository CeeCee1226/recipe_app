import PropTypes from 'prop-types';
import './FoodItem.css';
import icon from '../../assets/icon.png'; // Default fallback image

const FoodItem = ({ name, description, image, button }) => {
  // Check if any required prop is missing, if so return null (don't render the item)
  if (!name || !description || !image) {
    return null;
  }

  return (
    <div className="food-item">
      <img className="food-item-image" src={image || icon} alt={name || "Food item"} />
      <p className="food-item-name">{name}</p>
      <span className="food-rating">⭐⭐⭐⭐⭐</span>
      <p className="food-item-desc">{description}</p>
      <button className="btn">{button}</button>
    </div>
  );
};

FoodItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  button: PropTypes.string,
};

FoodItem.defaultProps = {
  name: ' ',
  description: ' ',
 
};

export default FoodItem;
