import React from 'react'

export default function MenuItems(props) {
    return (
        <div className="menuItems">
            <div className="image" style={{backgroundImage: `url(${props.image})`}}>
                {/* <img src={props.image} alt={props.name}/> */}
            </div>
            <div className="info">
                <h4>{props.name}</h4>
                <p>₹{props.price}</p>
            </div>
        </div>
    )
}
