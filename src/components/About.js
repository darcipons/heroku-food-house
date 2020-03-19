import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css'

const About = () => {

    const [photo, setPhoto] = useState({ meals: [] })

    const getPhoto = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setPhoto({ meals: data.meals[0] });
    };

    useEffect(() => {
      getPhoto();
    }, [photo[0]]);

    console.log(photo)

    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div class="carousel-item active">
            <img src={photo.meals.strMealThumb} alt={photo.meals.strMeal} className="d-block w-100"></img>
            </div>
            <div className="carousel-item">
            <img src={photo.meals.strMealThumb} alt={photo.meals.strMeal} className="d-block w-100"></img>
            </div>
            <div className="carousel-item">
            <img src={photo.meals.strMealThumb} alt={photo.meals.strMeal} className="d-block w-100"></img>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className='about'>Food House</div>
        <div className='about-description'>Food House was created during a part-time Front-End Development Course at Wyncode Academy. It uses the mealAPI to access recipes. The User can search for their favorite meals by category. They can also access a random recipe, that changes each time the page is visited or refreshed. Food House was styled using Bootstrap components and CSS.
        </div>
    </div>
    )
}
export default About;
