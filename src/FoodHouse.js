import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm'
import DishCard from './components/DishCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RandomRecipe from './components/RandomRecipe';
import About from './components/About';
import DishDetails from './components/DishDetails';
import Header from './components/Header'
// import Area from './components/Area'
import './FoodHouse.css'


const FoodHouse = () => {

  const [data, setData] = useState({ hits: [] })
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`
    );
    setData({ hits: result.data.meals });
  };
 
  useEffect(() => {
    fetchData();
  }, [search]);
  console.log(data);
 
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to="/" className='nav-link' style={{fontSize: '20px'}}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link' style={{fontSize: '20px'}}>About Food House</Link>
            </li>
            <li className='nav-item'>
              <Link to="/random" className='nav-link' style={{fontSize: '20px'}}>Recipe of the Day</Link>
            </li>
            <li>
            <SearchForm setSearch={setSearch} initialPlaceholder={search} />
            </li>
          </ul>
        </nav>

        <Switch>
         <Route path="/about" component={About}/>
         <Route path="/random">
           <RandomRecipe />
         </Route>
         <Route path="/:id" component={DishDetails} />
         {/* <Route path="/areas/:area" component={Area} /> */}
         <Route exact path="/">

         <div className="container">
          <Header/>
          {data.hits && data.hits.length
            ? data.hits.map(meal =>
              <DishCard key={meal.idMeal} meal={meal}>
              </DishCard>)
            : "Nothing found :-/"}
          </div>
         </Route>
       </Switch> 

        <footer className='footer'>
          <div>Copyright</div>
        </footer>  
      </div>
    </Router>
  );
 
}
export default FoodHouse;
