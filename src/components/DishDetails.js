import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
import axios from 'axios';
import './DishDetails.css'

const DishDetails = props => {

    const [recipe, setRecipe] = useState({ meals: [] })

    const getRecipe = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      );
      setRecipe({ meals: data.meals[0] });
    };

    useEffect(() => {
      getRecipe();
    }, []);

    return (
      <div>
      <div className="card mb-3 dish-details">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={recipe.meals.strMealThumb} alt='random recipe' className="card-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title dish-details">{recipe.meals.strMeal}</h5>
                <p className="card-text dish-details-cat">{recipe.meals.strCategory}</p>
                <p className="card-text dish-details">{recipe.meals.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
{/*        
        <Link
        to={{
          pathname: `/areas/${recipe.meals.strArea}`,
        }}
        > 
        <p>Get more recipes {recipe.meals.strArea}</p>
        
        </Link> */}
      </div>
    )
}
export default DishDetails;
