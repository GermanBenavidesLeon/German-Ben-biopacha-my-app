import { useCartContext } from '../Context/CartContext'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'


const Cart = () => {

    const {cartList, borrarCart, deleteItem} = useCartContext()

    console.log(cartList);

    return (
        <div className='CartClass'>
            <h2> Hola soy tu Cart! </h2>
            <div> 
                {cartList.map(items => <table class="table table-hover table-bordered border-success container">
                                            <thead class='table border-success'>
                                                <tr>
                                                    <th scope="col">Producto</th>
                                                    <th scope="col">Cantidad</th>
                                                    <th scope="col">Precio</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class='itemUno'>
                                                    
                                                    <td>{ items.name }</td>
                                                    <td>{ items.cantidad }</td>
                                                    <td>$ { items.price }</td>
                                                    <th>
                                                        <DeleteIcon onClick={() => deleteItem(items.id)} />
                                                    </th>    
                                                </tr>
                                            </tbody>
                                        </table>
                 )}
            </div>
                <Button onClick={borrarCart} variant="outlined" color='success' startIcon={<DeleteIcon  />}>
                    Delete Cart
                </Button>
        </div>
)
}

export default Cart
/*
<li className='tablaProd' key={items.id}>Producto {items.name}</li>)}
                {cartList.map(items => <li key={items.id}>Cantidad {items.cantidad}</li>)}
                {cartList.map(items => <li key={items.id}>Precio {items.price}</li>*/