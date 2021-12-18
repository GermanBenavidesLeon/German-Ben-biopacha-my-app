import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import '../ItemListContainer/ItemListContainer.css'
import { getFirestore } from '../../Service/getFirestore'

const ItemListContainer = () => {
    const [producs, setProducs] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams() 

    useEffect(() => {
        const db = getFirestore()
        const dbFire = id ?  db.collection('Productos').where('categoria', '==', id) : db.collection('Productos')
              dbFire.get()
            .then(data => setProducs( data.docs.map(pro => ( { id: pro.id, ...pro.data()}))))
            .finally(() => setLoading(false))
    },[id]) 
           
    return (
        <>
            { loading ? <div className="d-flex align-items-center marginSpin">
                            <strong>Cargando Producto...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> : <ItemList producs={producs}/>
            }    
        </>
    )
}

export default ItemListContainer
