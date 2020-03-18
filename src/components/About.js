import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = props => {

    const [photo, setPhoto] = useState({ meals: [] })

    const getPhoto = async () => {
      const { data } = await axios(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.match.params.id}`
      );
      setPhoto({ meals: data.meals });
    };

    useEffect(() => {
      getPhoto();
    }, []);

    console.log(photo)

    return (
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={photo.meal[0].strMealThumb} alt={photo.meal.strMeal} className="d-block w-100"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." class="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    )
}
export default About;
