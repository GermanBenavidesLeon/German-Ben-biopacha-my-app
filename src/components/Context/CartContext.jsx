import { createContext, useState, useContext } from "react";

const CartContext = createContext ([])

export const useCartContext = () => {
    return useContext(CartContext)

}
const CartContextProvider = ( {children} ) => {
    const [cartList, setCarList] = useState ([])


    function agregarCarrito(item) {
        setCarList( [...cartList, item ] )
    }

    const borrarCart=()=> {
        setCarList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarCart
        }}>
           {children} 
        </CartContext.Provider>
    )
}


export default CartContextProvider
