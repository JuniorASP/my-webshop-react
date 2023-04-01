import React from "react";
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Cart} from "./pages/cart/cart"
import {Shop} from "./pages/shop/shop"
import { ShopContextProvider } from "./components/context/shop-context";
import { ShopContext } from "./components/context/shop-context";

function App() {


  return (
    <ShopContextProvider>
    <div className="App">
    <Router>
    <Navbar />
    <Routes>


      <Route path="/" element={<Shop />}/>
      <Route path="/cart" element={<Cart />}/>

    </Routes>

    </Router>
   
    </div>
    </ShopContextProvider>
  );
}

export default App;
