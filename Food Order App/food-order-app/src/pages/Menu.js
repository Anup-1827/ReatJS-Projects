import React from 'react'
import MenuItems from '../Components/MenuItems'
import { MenuItemsList } from '../data/MenuItemsList'
import '../styles/Menu.css'

export default function Menu() {
    return (
        <div className="menu">
          {MenuItemsList.map((item, index)=>{
            
            return   <MenuItems key={index} name ={item.name} image={item.imagePath} price={item.price}/>
            
            // <img src={item.imagePath} alt={item.name}/>
            
           
          })}
        </div>
    )
}
