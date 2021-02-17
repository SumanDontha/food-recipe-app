import './App.css';
import './key'
import axios from 'axios'
import { useState } from 'react'
import RecipeList from './RecipeList';

function App() {

  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])
  const [healthLabel, setHealthLabel] = useState("vegan")

  const YOUR_APP_ID = "76f1ec3f"
  const  YOUR_APP_KEY = "97df6457433186495b1635954e925496"

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}
  `
  async function getRecipes() {
    let result = await axios.get(url)
    setRecipes(result.data.hits)
    console.log(result.data.hits)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes()
  }

  return (
    <div className="app">
      <h1> Food Recipes Application </h1>
      <form className="app__searchForm" onSubmit={handleSubmit}>
        <input type="text" className="app__input" placeholder="Enter Ingridient" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" className="app__submit" value="Search" />

      <select className="app__healthLabel">
        <option onClick={() => setHealthLabel("vegan")}> Vegan </option>
        <option onClick={() => setHealthLabel("vegetarian")}> Vegetarian </option>
        <option onClick={() => setHealthLabel("paleo")}> Paleo </option>
        <option onClick={() => setHealthLabel("dairy-free")}> Dairy-free </option>
        <option onClick={() => setHealthLabel("gluten-free")}> Gluten-free </option>
        <option onClick={() => setHealthLabel("wheat-free")}> Wheat-free </option>
        <option onClick={() => setHealthLabel("low-suger")}> Low-suger </option>
        <option onClick={() => setHealthLabel("egg-free")}> Egg-free </option>
        <option onClick={() => setHealthLabel("peanut-free")}> Peanut-free </option>
        <option onClick={() => setHealthLabel("tree-nut-free")}> Tree Nut Free </option>
        <option onClick={() => setHealthLabel("soy-free")}> Soy-free </option>
        <option onClick={() => setHealthLabel("fish-free")}> Fish-free </option>
      </select>

      </form>

      <div className="app__recipes">
        {recipes.map((recipe,i) =>{
          return <RecipeList key={i} recipe={recipe} />
        })}
      </div>

    </div>
  );
}

export default App;
