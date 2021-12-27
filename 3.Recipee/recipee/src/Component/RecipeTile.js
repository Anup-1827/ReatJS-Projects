import React from 'react'
import '../style/recipeTile.css'

export default function RecipeTile(prop) {
    const recipeCard = prop.item;
    return (
        <div className='RecipeTile'>
            <h4>{recipeCard['recipe']['label']}</h4>
            <img src={recipeCard['recipe']['image']} alt={recipeCard['recipe']['label']} onClick={()=>{window.open(recipeCard['recipe']['shareAs'])}}/>
        </div>
    )
}
