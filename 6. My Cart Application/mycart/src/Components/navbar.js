import React, { useState } from 'react'
import bag from '../media/icons/bag.svg'
import WishList from './WishList'


export default function Navbar() {
  const [items, setItems] = useState(4);

  const getItems = (numbers)=>{
      setItems(numbers)
  }
  return (
    <>
    <div className='Navbar'>
            <h1>Hot Deals</h1>
            <div className='icon'>
                <img src={bag}/>
                <div className='number'><h4>{items}</h4></div>
            </div>
    </div>
    <div className="wishlist">
    <WishList getItems = {getItems}/>
      </div>

      </>
  )
}
