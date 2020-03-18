import React from "react";
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './DishCard.css'

const DishCard = props => {

  // const [ area, setArea ] = useState({ meals: [] })

  // const getArea = async () => {
  //   const { data } = await axios(
  //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${}`
  //   );
  //   setArea({ meals: data.meals[0] });
  // };

  // useEffect(() => {
  //   getArea();
  // }, []);

  // console.log(area)


  // const getArea = () => {
  //   if(props.meal.strArea) {
  //     return props.meal.strArea
  //   } else {
  //     return 'Unknown'
  //   }
  // }

  return (
    <Link
        to={{
          pathname: `${props.meal.idMeal}`,
        }}
        >
        <div className="card dish">
        <img className="card-img-top" src={props.meal.strMealThumb} alt={props.meal.strMeal} />
        <div className="card-body">
          <h5 className="card-title">{props.meal.strMeal}</h5>
          {/* <span className="badge badge-pill badge-dark">{getArea()}</span> */}
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
