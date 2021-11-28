import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import Productos from '../Array/Productos'
import '../ItemDetail/ItemDetail.css'
import { getFirestore } from '../../Service/getFirestore';


const ItemDetailContainer = () => {
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    useEffect(() => {
        const itemsFirestore = getFirestore()
        itemsFirestore.collection('Productos').doc(id).get()
        .then(res => setItems({id: res.id, ...res.data()}))
        .finally(()=> setLoading(false))    
        
    },[id])
   
    return (
        <>
        {loading ? <div class="d-flex align-items-center marginSpin">
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>: <ItemDetail items={items} />  
                    } 

                    
        </>  
    )
}
   
export default ItemDetailContainer


