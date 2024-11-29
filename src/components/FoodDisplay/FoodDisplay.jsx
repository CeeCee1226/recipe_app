import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const { f_list } = useContext(StoreContext); // Access the f_list from context

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {f_list.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.image}
            button="Харах"
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
