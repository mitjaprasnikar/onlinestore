import React from 'react'
import CollectionItem from "../collection-item/collection-item"
import { CollectionPreviewContainer, Title, CollectionPreviewList } from './collection-preview-styles';



const CollectionPreview = ({title,items, history, match,routeName}) => (
    <CollectionPreviewContainer>
        <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase() }
          </Title>
        <CollectionPreviewList>
        {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </CollectionPreviewList>
        </CollectionPreviewContainer>
)

export default CollectionPreview;