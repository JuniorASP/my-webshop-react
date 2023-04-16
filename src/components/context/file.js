import React from "react";
const card = {

    fruit: 'banaan',
    groente: 'spruitjes'
}
const cart={

    0: 1,
    5: 2
}


console.log(card[fruit])
function removeFromCart (item){
setcart((prev)=>{
return  { ...prev, [item]: prev[item] -1}
// return  { ...prev, [cart]: cart[5] -1}

})

}