import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const { f_list } = useContext(StoreContext);

  if (!f_list || f_list.length === 0) {
    return <div>Loading...</div>;
  }

  const sections = [
    f_list.slice(0, 3),
    f_list.slice(3, 6),
    f_list.slice(6, 9),
  ];

  return (
    <div className="food-display" id="food-display">
      {sections.map((section, index) => (
        <div key={index} className="food-display-section">
          <div className="feature">
            <button className="featured-food">Онцгойлсон хоол</button>
            <button className="featured-recipe">Онцгойлсон жор</button>
            <button className="featured-cook">Онцгойлсон тогооч</button>
          </div>
          <div className="food-display-list">
            {section.map((item, idx) => (
              <FoodItem
                key={item.id || `food-${idx}`}
                name={item.name}
                description={item.description}
                image={item.image}
                button="Харах"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodDisplay;
