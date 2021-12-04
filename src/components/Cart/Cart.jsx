import { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import "animate.css"
import './Cart.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from '../Modal/Modal'


const Cart = () => {
    const [modalShow, setModalShow] = useState(false);
    
    const {cartList, borrarCart, deleteItem, cantidadItem, totalPrice} = useCartContext()

    return (
        <div className='CartClass'>
            { cartList.length === 0 ?
            <div>
                <div class='cartVacio'>
                    <h4 class='animate__animated animate__zoomIn animate__delay-1s'>Tu Carrito de compras esta Vacio</h4>
                </div>
                <div class='irCompras'>
                <Link to='/catalogo' className='linkClass'>
                    <Button variant="contained" color='success' startIcon={<ShoppingCartIcon  />}>Ir de Compras</Button>
                </Link>
                </div>
            </div>
            :
            <>
            <h2> Tu carrito de compras </h2>
            <div> 
                <table class="table table-hover table-bordered border-success container">
                    <thead class='table border-success'>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>   
                        {cartList.map(items =>  <tr class='itemUno'>
                                                    <td>{ items.name }</td>
                                                    <td>{ items.cantidad }</td>
                                                    <td>$ { items.price }</td>
                                                    <th>
                                                        <DeleteIcon onClick={() => deleteItem(items.id)} />
                                                    </th>
                                                </tr>     
                                            )}    
                    </tbody>
                    <tbody>
                        <tr class='itemDos'>
                            <th></th>
                            <th>
                                <p>Cantidad Total = {cantidadItem()}</p>
                            </th>
                            <th>
                                <p>Precio Total = {totalPrice()}</p>
                            </th> 
                            <th></th> 
                        </tr>
                    </tbody>
                </table>            
            </div>
            <div className='buttonCart'>
                <Link to='/catalogo' className='linkClass'>
                    <Button variant="outlined" color='success'>Segui comprando</Button>
                </Link>
                <Button onClick={borrarCart} variant="outlined" color='success' startIcon={<DeleteIcon  />}>
                    Delete Cart
                </Button>
                <Button variant="outlined" color='success' onClick={()=> setModalShow(true)}>Generar Orden</Button>
                <Modal show={modalShow} onHide={()=> setModalShow(false)} />
            </div>
            </>
        }
    </div>
    )
}

export default Cart
