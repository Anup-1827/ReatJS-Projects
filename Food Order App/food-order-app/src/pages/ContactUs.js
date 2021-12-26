import React from 'react'
import {Link} from 'react-router-dom'
import Photo from '../assets/photo.jpeg'
import '../styles/ContactUs.css'

export default function ContactUs() {
    return (
        <div className='contact' style={{backgroundImage:`url(${Photo})`}}>
            {/* <div className='contactImg'>
                <img src={Photo} alt="ContactUs"/>
            </div> */}
            <div className='form'>
                <form id="" method='POST' className='formSet'>
                    <label htmlfor="name" className='heading'>Full Name</label>
                    <input type="text" name='name' required className='inputBox' placeholder='Please Enter Your Name'/>
                    <label htmlfor="email" className='heading'>Email</label>
                    <input type="email" name="email" required className='inputBox' placeholder='Please Enter Your Email'/>
                    <label htmlfor="message" className='heading'>Message</label>
                    <textarea name='message'required className='inputBox' placeholder='Please write your message'/>
                    <Link to='/'> <button className='sendBtn'>Send</button> </Link>
                </form>
            </div>
        </div>
    )
}
