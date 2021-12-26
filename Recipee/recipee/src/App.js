import './App.css'
function App() {
  const applicationID ="da6f4bf7";
  const applicationKey ="ee3c476f9f0c115d6064ab2a72915799";
  const url = `https://api.edamam.com/search?q=chicken&app_id=${applicationID}&app_key=${applicationKey}&health=alcohol-free`;
  console.log(url);
  return (
    <div className="App">
      <div className="app_header">
        <h1>
          <u>Get Food Recipe</u>
        </h1>
        <div className="inputFields">
          <input type="text" autoComplete="off" placeholder="Please Enter Ingredients" className="ingredients searchBox" />
          <select className="ingredients">
            <option value="vegan">Vegan</option>
          </select>
          <button className="ingredients btn">Search Items</button>
        </div>
      </div>
    </div>
  );
}

export default App;
