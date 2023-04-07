import React from 'react'
import { products } from '../../products'
import { Product } from '../shop/product'
import { ShopContext } from '../../components/context/shop-context'
import { useContext } from 'react'
import { CartItem} from './cart-item'
import './cart.css'
import {useNavigate} from 'react-router-dom'






export const Cart = () => {
  const {cardItem, getTotalCartAmount}= useContext(ShopContext)
  const navigate = useNavigate()



  return (
    <div className='cart'>
  <div>
    <h1>Your Cart Item.</h1>
  </div>
  <div className='cartItems'> 
  {products.map((products) =>{
    if (cardItem[products.id] !==0){

      return < CartItem data={products}/>
    }
  })}

  <div className= 'checkout'>
  <p> Subtotal$: {getTotalCartAmount()}</p>
  <button onClick={()=> navigate('/')}> Contuinue Shopping</button>
  <button> Checkout</button>

</div>
  
  </div>
    </div>
  
  )}
