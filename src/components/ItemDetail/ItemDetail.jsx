import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({items}) => {
    const [, setCount] = useState(0)
    const {agregarItem} = useCartContext()

    const onAdd = (cant) => {
        setCount(cant)
        agregarItem({...items, cantidad: cant})   
    }
    
    return (
         <div className="card detailCard" key={items.id}>
            <img id='imgDetail' src={items.imagen} class="" alt="imagen de los productos" />
            <div>
                <h5>{items.name}</h5>
                <p className="card-text">{items.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: $ {items.price}</li>
            </ul>
            <div>
                <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
            </div>
        </div>         
    )
}

export default ItemDetail
