import React,{useReducer} from 'react'

import Cart from './Cart'
import Navbar from './navbar';

const initialState = Cart;
const reducer= (state, action)=>{
    const index = state.indexOf(action.item);
    // switch(action.type.toLowerCase()){
    //     case "minus":
    //         if(action.item.amount >0){
    //             state[index].amount--;
    //         }
    //         return [...state];
    //         break;
    //     case "plus":
    //         if(action.item.amount >0){
    //             state[index].amount=  state[index].amount + 1;
    //         }
    //         return [...state];
    //         break;
    //     case "remove":
    //         if(index != -1){
    //             state.splice(index, 1)
    //         }
    //         return  [...state];
    //         break;
    //     case "clearall":
    //         return state = [];
    //         break;
        
    // }

    const type = action.type.toLowerCase();

    if (type == "minus") {
        if (action.item.amount > 0) {
            --state[index].amount;
        }
        return [...state];
    }
    else if(type == "plus"){
        if(action.item.amount >=0){
            state[index].amount=  state[index].amount + 1;
        }
        return [...state];
    }
    else if(type == "remove"){
        if(index != -1){
            state.splice(index, 1)
        }
        return  [...state];
    }else if(type =="clearall"){
        return state = [];
    }
   
}

function WishList(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const total = state.reduce((total, item)=>{
        total += (item.price* item.amount)
        return total
    }, 0.00)
    
    const totalItem = state.reduce((totalItem, item)=>{
        totalItem += ( item.amount);
        return totalItem;
    }, 0)
    {props.getItems(totalItem)}
  return (

      <div className='section'>
      <h1>Your WishList</h1>
      {
          state.map((item, index)=>{
              return(
                  <div key={index} className="item">
                <div className='itemInfo'>
                    <div className='image'>
                        <img src={item.image} />
                    </div>
                    <div className='info'>
                        <p className='name'>{item.name}</p>
                        <p className='price'>₹{item.price}</p>
                        <p className='remove' onClick={()=>{dispatch({type :"remove", item: item})}}>remove</p>
                    </div>
                </div>
                <div className='number'>
                    <span className='minus' onClick={()=>{dispatch({type :"Minus", item: item})}}>-</span>
                    
                    <span>{item.amount}</span>
                    
                    <span className='plus' onClick={()=>{dispatch({type :"Plus", item: item})}}>+</span>
                </div>
            </div>
              )
              
            })
        }
        <div className='total'>
            <h2>Total</h2>
            <h2>₹ {total} </h2>
        </div>
        <div className='button'>
            <button className='btn' onClick={()=>{dispatch({type: "ClearAll"})}}>CLEAR ALL</button>
        </div>
      </div>
  )
}

export default WishList