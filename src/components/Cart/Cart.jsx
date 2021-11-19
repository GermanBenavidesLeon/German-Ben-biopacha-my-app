import { useCartContext } from '../Context/CartContext'

const Cart = () => {

    const {cartList, borrarCart} = useCartContext()

    console.log(cartList);

    return (
        <div>
            <h2> Hola soy tu Cart! </h2>
            {cartList.map(prod => <li key={prod.id}>{prod.name}</li>)}
            <button onClick={borrarCart}>Borrar carrito</button>
        </div>
    )
}

export default Cart