import React, { useState, useEffect } from 'react';
import Carousel  from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
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
        {/* Carousel for API random pictures of food */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photo.meals.strMealThumb} alt={photo.meals.strMeal}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photo2.meals.strMealThumb} alt={photo2.meals.strMeal}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={photo3.meals.strMealThumb} alt={photo3.meals.strMeal}
            />
          </Carousel.Item>
        </Carousel>

        {/* About food house description */}
        <div className='about'>Food House</div>
        <div className='about-description'>Food House was created during a part-time Front-End Development Course at Wyncode Academy. It uses the mealAPI to access recipes. The User can search for their favorite meals by category. They can also access a random recipe, that changes each time the page is visited or refreshed. Food House was styled using Bootstrap components and CSS.
        </div>

        {/* Accordian for questions/answers about food house */}
        <Accordion>
          <Card id='card-about'>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                How was Food House created?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Food House was created using Javascript, React, HTML, CSS, and Bootstrap</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card id='card-about'>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                What API was used in Food House?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>https://www.themealdb.com/api.php</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card id='card-about'>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Are these real recipes?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Yes, these are recipes from our best inhouse chefs.</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
}
export default About;
