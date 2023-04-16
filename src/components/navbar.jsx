import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
import { ShopContext } from './context/shop-context'
import { useContext } from 'react'


export const Navbar = () => {
  const {cardItem}= useContext(ShopContext)

function cartItemAmount (){
  let amount = Object.values(cardItem).reduce((a,b) =>{ 
     return a + b } )

     return amount
    }
    
  
  return (
    <div className='navbar'>
    <div className='links'>

    <Link to="/">Shop</Link>
    <Link to="/cart"> <ShoppingCart size={32}/> </Link>
    <div className='red'>
    {cartItemAmount()}
    </div>
    </div>
 

    </div>
  )
}


