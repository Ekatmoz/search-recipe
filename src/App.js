import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Recipes from './Components/Recipes';

function App() {

  const MY_ID = "555f7793"
  const MY_KEY = "7e32abad983506e1b2864d32183aab30"

  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("soup");
  
  const myRecipeSearch = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => { 
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setRecipe(data.hits)
    }
    getRecipe()
  },[search])

  const finalSearch = (e) => {
    e.preventDefault();
    setSearch(input)
  }

  return (
    <div className="App">
      <Navbar/>
      <Header finalSearch={finalSearch} myRecipeSearch={myRecipeSearch} input={input}/>
      <Buttons setSearch={setSearch}/>
      <Recipes recipe={recipe}/>
      <Footer/>
    </div>
  );
}

export default App;
