import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../../assets/assets';
import './AddRecipe.css'
const AddRecipe = () => {
  const navigate = useNavigate();
  
  // Form state
  const [recipe, setRecipe] = useState({
    name: '',
    type: '',
    step1: '',
    step2: '',
    step3: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    ingredients: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRecipe((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Recipe:', recipe);
  };

  return (
    <div className="add-recipe-container">
      <div className="container">
        <div className="topbar">
          <img src={Images.icook} className="iCook" alt="iCook Logo" />
      
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipe-name">Жор нэр</label>
            <input
              type="text"
              id="recipe-name"
              value={recipe.name}
              onChange={handleInputChange}
              placeholder="Жорын нэр"
            />
          </div>

          <div className="form-group">
            <label htmlFor="recipe-type">Жорын төрөл</label>
            <input
              type="text"
              id="recipe-type"
              value={recipe.type}
              onChange={handleInputChange}
              placeholder="Жорын төрөл"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Найрлага</label>
            <textarea
              id="ingredients"
              value={recipe.ingredients}
              onChange={handleInputChange}
              placeholder="Найрлага..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="step-1">1-р алхам</label>
            <textarea
              id="step-1"
              value={recipe.step1}
              onChange={handleInputChange}
              placeholder="Тодорхойлолт..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="step-2">2-р алхам</label>
            <textarea
              id="step-2"
              value={recipe.step2}
              onChange={handleInputChange}
              placeholder="Тодорхойлолт..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="step-3">3-р алхам</label>
            <textarea
              id="step-3"
              value={recipe.step3}
              onChange={handleInputChange}
              placeholder="Тодорхойлолт..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="prep-time">Бэлдэх хугацаа</label>
            <input
              type="number"
              id="prep-time"
              value={recipe.prepTime}
              onChange={handleInputChange}
              placeholder="min"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cook-time">Хоол хийх хугацаа</label>
            <input
              type="number"
              id="cook-time"
              value={recipe.cookTime}
              onChange={handleInputChange}
              placeholder="hours"
            />
          </div>

          <div className="form-group">
            <label htmlFor="total-time">Нийт хугацаа</label>
            <input
              type="number"
              id="total-time"
              value={recipe.totalTime}
              onChange={handleInputChange}
              placeholder="hours"
            />
          </div>

          <button type="submit" className="submit-button">Шинээр нэмэх</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
