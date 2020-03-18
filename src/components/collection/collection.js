import React from 'react'
import "./collections.scss";
import CollectionItem from "../collection-item/collection-item"



const Collection = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase() }</h1>
        <div className ="preview">
            {items.filter((itemd,idx) => idx < 4 ).map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}

        </div>
    </div>
)

export default Collection;