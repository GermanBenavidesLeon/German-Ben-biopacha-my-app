import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
//import Productos from '../Array/Productos'
import { useParams } from 'react-router'//useParams es un custom hokk sirve para capturar mi parametro en la url, con useefect actualizamos los parametro
import '../ItemListContainer/ItemListContainer.css'
import { getFirestore } from '../../Service/getFirestore'



const ItemListContainer = () => {
    const [producs, setProducs] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams() 

    useEffect(() => {
        
        const prodFirestore = getFirestore()

        if (id) {

            prodFirestore.collection('Productos').where('categoria', '==', id).get()
            .then(data => setProducs( data.docs.map(pro => ( { id: pro.id, ...pro.data()}))))
            .finally(() => setLoading(false))

        } else {
            prodFirestore.collection('Productos').get()
            .then(data => setProducs( data.docs.map(pro => ( { id: pro.id, ...pro.data()}))))
            .finally(() => setLoading(false))
        
        

        }
        /*if(id){
            getFetch 
                .then(respuesta => setProducs(respuesta.filter(prod => prod.categoria === id)))
                .catch(error => console.log(error))
                .finally(()=> setLoading(false))

        } else {

            getFetch
                .then(respuesta => setProducs(respuesta))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }*/
        },[id]) //se ingresa dependencia donde me identifica la categoria.
        
        
    return (
        <>
       
            
            { loading ? <div class="d-flex align-items-center marginSpin">
                            <strong>Loading Producto...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> : <ItemList producs={producs}/>
            }
            
        </>
    )
}

export default ItemListContainer
