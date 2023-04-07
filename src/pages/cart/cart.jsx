import React from 'react'
import { products } from '../../products'
import { Product } from '../shop/product'
import { ShopContext } from '../../components/context/shop-context'
import { useContext } from 'react'
import { CartItem} from './cart-item'
import './cart.css'






export const Cart = () => {
  const {addToCart, cardItem}= useContext(ShopContext)



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
  </div>
    </div>
  )
}
