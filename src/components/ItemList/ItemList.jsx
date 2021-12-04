import { memo } from 'react'
import Item from '../Item/Item'

const ItemList = memo(
    ({producs}) => {

        return (
            <>
                {producs.map( prod => <Item key={prod.id}  prod={prod}/> ) }
        
            </>
        )
    }
)

export default ItemList
