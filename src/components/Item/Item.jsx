import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

const Item = ({prod}) => {
    return (
        <div className='row itemPro'>
            <div className="col-sm-4 itemPro" key={prod.id}>
                <div className='card'>
                    <div className='card-body' >
                        <img src={prod.imagen} alt="imagenes de los productos"/>
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.categoria}.</p>
                        <Link to={`/detail/${prod.id}`}> 
                            <button className="btnItemList btn btn-outline-success">Detalles del Producto</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
