import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'


const Item = ({prod}) => {
    return (
        <div class='row itemPro'>
        <div class="col-sm-4 itemPro" key={prod.id}>
            <div class='card'>
            <div class='card-body' >
                <img src={prod.imagen} class="" alt="imagenes de los productos"/>
                <h5 class="card-title">{prod.name}</h5>
                <p class="card-text">{prod.categoria}.</p>
                <Link to={`/detail/${prod.id}`}> 
                    <button class="btnItemList btn btn-outline-success">Detalles del Producto</button>
                </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Item
//card mb-2
//