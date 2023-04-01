import React, { useState } from 'react'
import { createContext } from 'react'
import { products } from '../../products'



export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let card = {}
    for ( let i= 1; i< products.length +1; i++){
        card[i] = 0
    }
    return card
}


export const ShopContextProvider = (props) => {

const [cardItem, setCardItem]= useState(getDefaultCart)

const addToCart = (itemId) =>{
setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] +1 }))}


const removeFromCart = (itemId) =>{
    setCardItem((prev) => ({ ...prev, [itemId]: prev[itemId] -1 }))}


    const contextValue = {addToCart, removeFromCart,cardItem}
  return (
    <ShopContext.Provider value ={contextValue}>{props.children}</ShopContext.Provider>
  )
}
