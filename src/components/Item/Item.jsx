import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({prod}) => {
    return (
 //       <div class="card mb-2" >
            <div class="row g-0 itemPro" key={prod.id}>
                <div class="col-md-4">
                    <img src={prod.imagen} class="img-fluid rounded-start" alt="imagenes de los productos"/>
                </div>
                <div class="col-md-4 cardItem">
                    <div class="card-body">
                        <h5 class="card-title">{prod.name}</h5>
                        <p class="card-text">{prod.categoria}.</p>
                        <Link to={`/detail/${prod.id}`}> 
                        <button class="btnItemList btn btn-outline-success">Detalles del Producto</button>
                        </Link>
                    </div>
                </div>
            </div>
      //  </div>      
    )
}

export default Item
