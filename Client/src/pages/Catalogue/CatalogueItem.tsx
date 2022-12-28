import {CatalogueItemModel} from '../../models/CatalogueItemModel';

export interface params {
  item: CatalogueItemModel,
  deleteItem: () => void
}

export default function CatalogueItem(params: params) {
  return (
    <>
      <h1>{params.item.title}</h1>
      <h3>{params.item.currentBid}</h3>
      <button onClick={params.deleteItem}>Delete</button>
      <hr/>
    </>
  )
}