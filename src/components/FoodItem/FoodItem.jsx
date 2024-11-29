import React from 'react';
import './FoodItem.css';
import { f_list, Images } from '../../assets/assets'; 

const FoodItem = ({ id, name, description, image, button }) => {

  return (
    <div className="section">
      <div className='feature'>
      <button className="featured-food">Онцгойлсон хоол</button>
      <button className="featured-recipe">Онцгойлсон жор</button>
      <button className="featured-cook">Онцгойлсон тогооч</button>
    
      <div className="food-item">
        <div className="food-item-img-container">
          <img className = "food-item-image" src={image} alt={`${name}`} />

        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <span className="food-rating">⭐⭐⭐⭐⭐</span>
          </div>
          <p className="food-item-desc">{description}</p>
          <button className='btn'>{button || "Харах"}</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;  