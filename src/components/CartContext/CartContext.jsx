/*import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = ()=>{
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function AgregarCarrito (item){
        setCartList ([...cartList , item])

    }
    return (
        <CartContext.Provider value={{ 
            cartList,
            AgregarCarrito 
            }}>
           {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider*/
