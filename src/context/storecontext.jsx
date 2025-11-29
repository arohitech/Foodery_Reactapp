import { createContext, useEffect } from "react";
import { useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cart, setCartitems] = useState({});
  const addtoCart = (itemId)=> {
    console.log("id :", itemId);
    setCartitems((prev) => ({
      ...prev,
      [itemId]:(prev[itemId] || 0)+1,
  }));
};

  const removeFromCart = (itemId) => {
       setCartitems((prev)=>{
        const updated = {...prev};
        if(updated[itemId]>1){
          updated[itemId] -= 1;
        }else{
          delete updated[itemId];
        }
        return updated;
       });
  };


  const gettotalcartItems= () => {

    let totalAmount = 0;
    for(let itemId in Cartitems){
      const Quantity = Cartitems[itemId];
      if(Quantity >0){
      let iteminfo = food_list.find((product)=> product._id === itemId);
      if(iteminfo){
      totalAmount += iteminfo.price*Quantity;
        }
      }
    }
    return totalAmount;
  };

  const Cartitems = cart;
  const contextvalue = {
    food_list,
    Cartitems,
    removeFromCart,
    addtoCart,
    gettotalcartItems
  };

  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};


export default StoreContextProvider;
