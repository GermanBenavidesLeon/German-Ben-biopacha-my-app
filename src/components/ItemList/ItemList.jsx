import React from 'react'
import Item from '../Item/Item'


const ItemList = ({producs}) => {
    return (
        <>
        {producs.map( prod => <Item  prod={prod}/> ) }
        
        </>
)}

export default ItemList
