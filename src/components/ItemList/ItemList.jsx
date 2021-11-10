import React from 'react'
import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemList({producs}) {
    return (
        <>
        {producs.map( prod => <Item prod={prod}/> ) }
        
        </>
)}

export default ItemList
