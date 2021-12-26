import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <div className='home'>
            <p className='foodCorner'>Food Corner</p>
            <p className="indianFood">INDIAN FOOD ON CLICK</p>
            <Link to="/menu" className='orderNow'>
               Order Now
            </Link>
        </div>
    )
}
