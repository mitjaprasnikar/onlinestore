import React from 'react'
import "./collections.scss";
import CollectionItem from "../collection-item/collection-item"



const Collection = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase() }</h1>
        <div className ="preview">
            {items.filter((itemd,idx) => idx < 4 ).map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}

        </div>
    </div>
)

export default Collection;