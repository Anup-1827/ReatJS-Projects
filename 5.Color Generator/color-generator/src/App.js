import react, {useState} from 'react'
import Values from 'values.js'
import './App.css';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState("#FF7777");
  const [list, setList] = useState(new Values('#FF7777').all(10));

  const getColorShades=()=>{
    try{
      let shades = new Values(color).all(10);  
      setList(shades);
      console.log(list);
    }
    catch(err){
      alert(err)
    }
  }


  return (
    <div className="App">
        <h1>Color Genertor</h1>
      <section className='section'>
        <input type="text" className='colorInput' placeholder ={color} value={color} onChange={(e)=> setColor(e.target.value)}/>
        <button className='btn' onClick={getColorShades}>Get Color</button>
      </section>
      <section className='colors'>
        {list.map((item, index)=>{
         return <SingleColor index ={index} item = {item}/>
        })}
      </section>
    </div>
  );
}

export default App;
