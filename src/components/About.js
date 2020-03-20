import React, { useState, useEffect } from 'react';
import Carousel  from 'react-bootstrap/Carousel'
import axios from 'axios';
import './About.css'

const About = () => {

    const [photo, setPhoto] = useState({ meals: [] })
    const [photo2, setPhoto2] = useState({ meals: [] })
    const [photo3, setPhoto3] = useState({ meals: [] })

    const getPhoto = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setPhoto({ meals: data.meals[0] });
    };

    const getPhoto2 = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setPhoto2({ meals: data.meals[0] });
    };

    const getPhoto3 = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      setPhoto3({ meals: data.meals[0] });
    };

    useEffect(() => {
      getPhoto();
      getPhoto2();
      getPhoto3();
    }, [photo[0]]);

    return (
      <div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo.meals.strMealThumb} alt={photo.meals.strMeal}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo2.meals.strMealThumb} alt={photo2.meals.strMeal}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo3.meals.strMealThumb} alt={photo3.meals.strMeal}
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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
        </div> */}

        <div className='about'>Food House</div>
        <div className='about-description'>Food House was created during a part-time Front-End Development Course at Wyncode Academy. It uses the mealAPI to access recipes. The User can search for their favorite meals by category. They can also access a random recipe, that changes each time the page is visited or refreshed. Food House was styled using Bootstrap components and CSS.
        </div>
    </div>
    )
}
export default About;
