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

  console.log(random)

  return (
    <div className='card mb-3 random'>
      <h1 className='card-title'>{random.meals.strMeal}</h1>
      <p className='card-subtitle'>Category: {random.meals.strCategory}</p>
      <img src={random.meals.strMealThumb} alt='random.meals.strMeal' className='card-img-top'></img>
      <div className='card-body'>
        <p className='card-text'>{random.meals.strInstructions}</p>
      </div>
    </div>
  )
}

export default RandomRecipe;
