import { useState } from 'react';
import { Images } from '../../assets/assets';
import './AddRecipe.css';

const AddRecipe = () => {  
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
            <label htmlFor="name">Жорын нэр</label>
            <input
              type="text"
              id="name"
              value={recipe.name}
              onChange={handleInputChange}
              placeholder="Жорын нэр"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Жорын төрөл</label>
            <input
              type="text"
              id="type"
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
            <label htmlFor="step1">1-р алхам</label>
            <textarea
              id="step1"
              value={recipe.step1}
              onChange={handleInputChange}
              placeholder="Дэлгэрэнгүй тайлбарлах..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="step2">2-р алхам</label>
            <textarea
              id="step2"
              value={recipe.step2}
              onChange={handleInputChange}
              placeholder="Дэлгэрэнгүй тайлбарлах..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="step3">3-р алхам</label>
            <textarea
              id="step3"
              value={recipe.step3}
              onChange={handleInputChange}
              placeholder="Дэлгэрэнгүй тайлбарлах..."
            />
          </div>
          <div className="addStep">
            <button>Алхам нэмэх</button>
          </div>
          <div className="form-group">
            <label htmlFor="prepTime">Бэлдэх хугацаа</label>
            <input
              type="number"
              id="prepTime"
              value={recipe.prepTime}
              onChange={handleInputChange}
              placeholder="min"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cookTime">Хоол хийх хугацаа</label>
            <input
              type="number"
              id="cookTime"
              value={recipe.cookTime}
              onChange={handleInputChange}
              placeholder="hours"
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalTime">Нийт хугацаа</label>
            <input
              type="number"
              id="totalTime"
              value={recipe.totalTime}
              onChange={handleInputChange}
              placeholder="hours"
            />
          </div>

          <button type="submit" className="submit-button">
            Илгээх
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
