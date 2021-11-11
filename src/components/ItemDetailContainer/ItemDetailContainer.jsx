import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import Productos from '../Array/Productos'
import '../ItemDetail/ItemDetail.css'

const getItems = new Promise((res, rej)=>{
    const condition = true

        if(condition){
            setTimeout(()=>{
                res(Productos)
            }, 2000)
        }  else {
            setTimeout(()=>{
                rej('404 not found')
            }, 2000)

        }
})

console.log(Productos);

const ItemDetailContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        if(id){
            getItems
                .then(res => {setItems(res.find(item => item.id === id))})
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))    
        
        } else {
            getItems
                .then(res => setItems(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
          }

    },[id])
   
    return (
        <>
        {loading ? <div class="d-flex align-items-center marginSpin">
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>: <ItemDetail items={items[0]} />  
                    } 
        </>  
    )
}
   
export default ItemDetailContainer
