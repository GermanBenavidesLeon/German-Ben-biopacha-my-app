import React from 'react'

function ItemDetail({items}) {
    console.log(items);
    return (
         <div class="card detailCard" key={items.id}>
            <img src={items.imagen} class="card-img-top" alt="imagen de los productos" />
            <div class="card-body">
                <h5 class="card-title">{items.name}</h5>
                <p class="card-text">{items.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">$ {items.price}</li>
                <li class="list-group-item">stock #</li>
            </ul>
            <div class="card-body">
                <button class="btn btnItemList"><a href="#" >agregar al carrito</a></button>
            </div>
        </div>     
        
    )
}


export default ItemDetail
