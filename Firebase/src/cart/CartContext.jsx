// import React, { createContext, useState,useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem('cart');
//     return storedCart ? Array.isArray(JSON.parse(storedCart)) ? JSON.parse(storedCart) : [] : [];
//   });

//   // const addToCart = (item) => {
//   //   setCart((prevCart) => [...prevCart, item]);
//   // }


//   const addToCart = ( (item)=>{
//     const existingProd = cart.findIndex( (prd)=>{ item.id === prd.id })

//     if(existingProd >= 0) {
//       const updatedProd = [...cart]
//       updatedProd[existingProd].quantity += item.quantity;
//       setCart(updatedProd)
//       localStorage.setItem("cart",JSON.stringify(updatedProd))
//     }else {
//       const newItem = {...item,quantity:1}
//       const updatenewprod = [...cart,newItem]
//       setCart(updatenewprod)
//       localStorage.setItem("cart",JSON.stringify(updatenewprod))
//     }
//   } )




//   const removeFromCart = (productId) => {
//     setCart((prevCart) => {
//       return prevCart.filter(product => product.id !== productId);
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);


//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };





import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });


  const [orderData,setorderData] = useState(null)

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingProdIndex = prevCart.findIndex(prd => item.id === prd.id);

      if (existingProdIndex >= 0) {
        const updatedCart = [...prevCart];
        (updatedCart[existingProdIndex].quantity || 0) + (item.quantity || 1);// Ensure item has a quantity property
        return updatedCart;
      } else {
        const newItem = { ...item, quantity: item.quantity || 1 }; // Default to 1 if no quantity provided
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ orderData,setorderData, cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
