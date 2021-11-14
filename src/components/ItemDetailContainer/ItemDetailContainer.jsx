import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
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
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
       
       getItems
            .then(res => setItems(res.find(item => item.id === parseInt (id))))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))    
        
    },[id])
   
    return (
        <>
        {loading ? <div class="d-flex align-items-center marginSpin">
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>: <Link to='/Detail'><ItemDetail items={items} /></Link>  
                    } 
        </>  
    )
}
   
export default ItemDetailContainer


