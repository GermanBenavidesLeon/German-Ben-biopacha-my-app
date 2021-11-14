import React from 'react';
import { Button } from 'react-bootstrap'; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './ItemCount.css';
import {useState} from 'react';

// Importe una libreria para incluir nuevos alert y no los de siempre

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial)

    const sumarItem = () =>{
        count < stock ? setCount(count + 1) : Swal.fire(   // este es un alert de la libreria q instale
            'Ooppss!',
            'Limite de productos!',
            'warning'
          )
    }

    const restarItem = () =>{
        count > initial ? setCount(count - 1) : Swal.fire(      // este es un alert de la libreria q instale
            'Por favor!',
            'Debes agregar al menos un producto!',
            'error'
          )
    }

    const onAdd = () => {
        const MySwal = withReactContent(Swal)   // este es un alert de la libreria q instale
        MySwal.fire({
            didOpen: () => {
        MySwal.clickConfirm()
      }
        }).then(() => {
            return MySwal.fire(<p>agregaste {count} productos al carrito</p>)
        })
}

    return (
        <div className="classCount">
            <Button variant="outline-success" onClick={sumarItem}>+</Button>
            <label>{count}</label>
            <Button variant="outline-danger" onClick={restarItem}>-</Button>
            <Button variant="outline-success" onClick={onAdd}>Agregar al Carrito</Button>
        </div>
    )
}

export default ItemCount
