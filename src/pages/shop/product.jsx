import React from 'react'
import { ShopContext } from '../../components/context/shop-context'
import { useContext } from 'react'

export const Product = (props) => {

    const {id, productImage, price,productName} = props.data
    const {addToCart, cardItem}= useContext(ShopContext)
    const cardItemAmount = cardItem[id]


  return (
    <div className='product'>
    <img src={productImage}/>
    <div className='description'>
    <p>
        <b>{productName}</b>
    </p>
    <p> ${price} </p>

    </div>
    <button className='addToCartBttn' onClick={() => addToCart(id)}>
    Add to cart{cardItemAmount > 0 && <> ({cardItemAmount})</>} 
    </button>
    </div>
  )
}
