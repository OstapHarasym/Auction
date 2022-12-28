import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {LotsService} from '../../services/LotsService';
import CatalogueItem from './CatalogueItem';

export default function Catalogue() {
  const [lots, setLots] = useState<CatalogueItemModel[]>()

  useEffect(() => {
    LotsService.getLots().then(data => setLots(data))
  }, []);

  function deleteLot(id: number) {
    LotsService.deleteLot(id).then(() =>
      setLots(prevState => prevState?.filter(lot => lot.id !== id)))
  }

  return (
    <>
      {lots?.map(lot => <CatalogueItem
        item={lot}
        deleteItem={() => deleteLot(lot.id)}
      />)}
    </>
  )
}