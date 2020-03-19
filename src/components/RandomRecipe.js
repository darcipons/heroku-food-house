import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomRecipe.css'

const RandomRecipe = () => {

  const [random, setRandom] = useState({ meals: []})

  const getRandom = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setRandom({ meals: data.meals[0] });
  };

  useEffect(() => {
    getRandom();
  }, []);


  return (
    <div className="card mb-3 dish-details">
    <div className="row no-gutters">
      <div className="col-md-4">
        <img src={random.meals.strMealThumb} alt='random recipe' className="card-img"/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title dish-details">{random.meals.strMeal}</h5>
          <p className="card-text dish-details-cat">Category: {random.meals.strCategory}</p>
          <p className="card-text dish-details">{random.meals.strInstructions}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RandomRecipe;
