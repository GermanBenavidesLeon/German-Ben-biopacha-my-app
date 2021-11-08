import {useState, useEffect} from 'react'
import { getFetch } from '../../getFetch'
import ItemList from '../Item e ItemList/ItemList'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {
    const [producs, setProducs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch // llamada a la api
        .then(respuesta => {
        setProducs(respuesta) //el array con productos
        },)
        //.then(resp => console.log(resp))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    },[])

    console.log(producs);

    return (
        <>
            <h2>{greeting}</h2>
            { loading ? <div class="d-flex align-items-center marginSpin">
                            <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> : <ItemList producs={producs}/>
            }
            <ItemCount initial={1} stock={5} />   
        </>
    )
}

export default ItemListContainer
