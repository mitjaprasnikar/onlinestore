import React from "react";
import SHOP_DATA from "./shop-data";
import Collection from "../../components/collection/collection";

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: SHOP_DATA
        };
    }
    render() {  
       const data = this.state.list;
        return( <div className="shop-page">
            {
            data.map( ({id, ...otherCollectionProps}) => (
                <Collection key={id} {...otherCollectionProps} />
            ))
            }
            </div>
        )
    }
}


export default Shop;