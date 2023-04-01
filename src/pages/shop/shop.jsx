import React, { useContext } from 'react'
import { products } from '../../products'
import { Product } from './product'
import './shop.css'



export const Shop = () => {


  return (
    <div className='shop'>
    <div className='shopTitle'>

        <h1>Junior's Apple Webshop</h1>
    </div>
    <div className='products'>
    {products.map((product) => < Product  data ={product}/>)}

    </div>
    </div>
  )
}
