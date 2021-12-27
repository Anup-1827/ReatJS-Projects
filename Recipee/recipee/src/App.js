import './App.css'
import {useState, useEffect} from 'react'
import RecipeTile from './Component/RecipeTile';

const axios = require('axios')
function App() {
  
 const [intregients, setIngredients] = useState("");
 const [recipe,  setRecipe] = useState([]);
 const [heatlthLbl, setHealthLbl] = useState("alcohol-free")
 useEffect(()=>{
  // console.log(heatlthLbl);
}, [heatlthLbl])



  const applicationID ="da6f4bf7";
  const applicationKey ="ee3c476f9f0c115d6064ab2a72915799";
let url = '';

  // console.log(url);
  const getInfo = async (e)=>{
    e.preventDefault();
    try{
        url = `https://api.edamam.com/search?q=${intregients}&app_id=${applicationID}&app_key=${applicationKey}&health=${heatlthLbl}`;
      console.log(url);
      let res = await axios.get(url);
    let resJson = await res.data.hits;
    console.log(resJson);
    setRecipe(resJson);
    
    }
    catch(err){
      console.log(err);
      console.log("Falied-Request");
      url = `https://api.edamam.com/search?q=${intregients}&app_id=${applicationID}&app_key=${applicationKey}&health=alcohol-free`;
      console.log(url);
      let res = await axios.get(url);
    let resJson = await res.data.hits;
    console.log(resJson);
    }

  }


  
  return (
    <div className="App">
      <div className="app_header">
        <h1>
          <u>Get Food Recipe</u>
        </h1>
        <div className="inputFields">
          <input type="text" autoComplete="off" placeholder="Please Enter Ingredients" className="ingredients searchBox" value={intregients}  onChange={(e)=>{setIngredients(e.target.value)}}/>
          <select className="ingredients" onChange={(e)=>{setHealthLbl(e.target.value)}}>
            <option value="vegan">Vegan</option>
            <option value="egg-free" >Egg-Free</option>
            <option value="dairy-free">Dairy-Free</option>
            <option value="gluten-free" >Gluten-Free</option>
            <option value="alcohol-free">Alcohol-Free</option>
          </select>
          <button className="ingredients btn" onClick={getInfo}>Search Items</button>
        </div>
      </div>
      <div className='recipeCard'>
      {recipe.map(
        (item)=>{return <RecipeTile item ={item}/>}
      )}
    </div>
    </div>
  );
}

export default App;
