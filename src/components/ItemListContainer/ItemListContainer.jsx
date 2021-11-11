import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import Productos from '../Array/Productos'
import './ItemListContainer.css'
import { useParams } from 'react-router'

const getFetch = new Promise((resolve, reject)=>{
    const condition=true
     if(condition) {
        setTimeout(()=>{
            resolve(Productos)
        }, 2000)
     } else{
         setTimeout(()=>{
           reject('404 not found')
         }, 2000)
     }
 })

const ItemListContainer = () => {
    const [producs, setProducs] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()


    useEffect(() => {
        if(id){
            getFetch 
                .then(respuesta => setProducs(respuesta.filter(prod => prod.categoria === id)))
                .catch(error => console.log(error))
                .finally(()=> setLoading(false))

        } else {

            getFetch
                .then(respuesta => setProducs(respuesta))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
            },[id])


    console.log(producs);


    return (
        <>
            
            { loading ? <div class="d-flex align-items-center marginSpin">
                            <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div> : <ItemList producs={producs}/>
            }
            
        </>
    )
}

export default ItemListContainer
