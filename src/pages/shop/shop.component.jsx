import React from 'react';

import CollectionPreview from '../../components/preview-collection/preview-collection.component'

import {SHOP_DATA} from './shop.data'

export default class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA}
    }

    render() {
        const {collections} = this.state;
    return (
    <div>
        { collections.map(({id, ...otherCollectionProps}) => (
        <CollectionPreview className='collection-preview' key={id} {...otherCollectionProps}/>
        ))
        }
    </div>
    )    
}

}