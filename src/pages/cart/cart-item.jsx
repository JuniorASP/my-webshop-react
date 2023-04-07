import React,{useContext} from 'react'
import { ShopContext } from '../../components/context/shop-context'






export const CartItem = (props) => {
  const {addToCart, cardItem, removeFromCart}= useContext(ShopContext)

  const {id, productImage, price,productName} = props.data

  return (
    <div className='cartItem'>

      <img src={productImage}/>
      <div className='description'>

        <p>

          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={()=> removeFromCart(id)}> - </button>
          <input value={cardItem[id]}/>
          <button onClick={()=> addToCart(id)}> + </button>

        </div>
      </div>
    </div>
  )
}
