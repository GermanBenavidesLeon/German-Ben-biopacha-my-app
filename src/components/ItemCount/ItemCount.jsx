import React from 'react';
import { Button } from 'react-bootstrap'; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './ItemCount.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)
    const [cambioButton, setCambioButton] = useState(true)

    const sumarItem = () =>{
        count < stock ? setCount(count + 1) : Swal.fire(   
            'Ooppss!',
            'Limite de productos!',
            'warning'
        )
    }

    const restarItem = () =>{
        count > initial ? setCount(count - 1) : Swal.fire(      
            'Por favor!',
            'Debes agregar al menos un producto!',
            'error'
        )
    }

    const Agregar = () => {
        onAdd(count)
        setCount(1)
        setCambioButton(false)
        
        const MySwal = withReactContent(Swal)   
            MySwal.fire({
                didOpen: () => {
            MySwal.clickConfirm()
        }
            }).then(() => {
                return MySwal.fire(<h5>agregaste {count} productos al carrito</h5>)
            })    
    }

    return (
        <div className="classCount">
            {cambioButton ?
                <>
                <Button variant="outline-success" onClick={sumarItem}>+</Button>
                <label>{count}</label>
                <Button variant="outline-danger" onClick={restarItem}>-</Button>
                <Button variant="outline-success" onClick={Agregar}>Agregar al Carrito</Button>
                </>
            :
            <div className='nuevoBoton'>
                <Link to='/catalogo' className='linkClass'>
                    <Button variant='outline-success' >Seguir comprando</Button>
                </Link>
                <Link to='/Cart'>
                    <Button variant='outline-success' >Ir a Comprar</Button>
                </Link>
            </div>
            }
        </div>
    )
}

export default ItemCount
