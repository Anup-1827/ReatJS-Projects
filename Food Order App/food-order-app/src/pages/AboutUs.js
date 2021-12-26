import React from 'react'
import Masala from '../assets/masala.jpg'
import '../styles/About.css'
export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div className='aboutImage'>
                <img src={Masala} alt={Masala}/>
            </div>
            <div class='aboutInfo'>
            <h1>About Us</h1>
            <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel perspiciatis velit repudiandae voluptate dolorum minus facere tempora explicabo iste, incidunt dolore, nam quidem dolor similique hic veritatis sint sunt!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel perspiciatis velit repudiandae voluptate dolorum minus facere tempora explicabo iste, incidunt dolore, nam quidem dolor similique hic veritatis sint sunt!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vel perspiciatis velit repudiandae voluptate dolorum minus facere tempora explicabo iste, incidunt dolore, nam quidem dolor similique hic veritatis sint sunt!
</p>
            </div>
        </div>
    )
}
