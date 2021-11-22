import { createContext, useState, useContext } from "react";

const CartContext = createContext ([])

export const useCartContext = () => {
    return useContext(CartContext)

}
const CartContextProvider = ( {children} ) => {
    const [cartList, setCarList] = useState ([])

    const agregarItem =( item ) => {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const cantVieja = cartList[index].cantidad

            cartList.splice(index, 1)
            setCarList([...cartList, { ...item, cantidad: item.cantidad + cantVieja}])
        } else {
            setCarList([...cartList, item ])
        }
        
    }

    const deleteItem = (id) => {
        setCarList(cartList.filter(item => item.id !== id))
    }


    const cantidadItem = () => {
        return cartList.reduce((acum, item)=> acum = acum + item.cantidad , 0)
    }

    const borrarCart=()=> {
        setCarList([])
    }

    console.log(cartList);

    return (
        <CartContext.Provider value={{
            cartList,
            agregarItem,
            deleteItem,
            borrarCart,
            cantidadItem
        }}>
           {children} 
        </CartContext.Provider>
    )
}


export default CartContextProvider
