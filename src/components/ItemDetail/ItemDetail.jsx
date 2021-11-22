import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({items}) => {
    const [count, setCount] = useState(0)

    const {cartList, agregarItem} = useCartContext()
    console.log(cartList);


    const onAdd = (cant) => {
        setCount(cant)
        agregarItem({...items, cantidad: cant})
        console.log(`la cantidad es ${cant}`);
    }

    console.log(cartList);
    
    return (
         <div class="card detailCard" >
            <img src={items.imagen} class="card-img-top" alt="imagen de los productos" />
            <div class="card-body">
                <h5 class="card-title">{items.name}</h5>
                <p class="card-text">{items.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Precio: $ {items.price}</li>
                <li class="list-group-item">stock #</li>
            </ul>
            <div class="card-body">
            <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
            
            </div>
        </div>     
        
    )
}


export default ItemDetail
