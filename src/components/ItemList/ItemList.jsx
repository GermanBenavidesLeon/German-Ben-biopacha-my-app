import React from 'react'
import Item from '../Item/Item'

function ItemList({producs}) {
    return (
        <>
        {producs.map( prod => <Item prod={prod}/> ) }
        
        </>
)}

export default ItemList
