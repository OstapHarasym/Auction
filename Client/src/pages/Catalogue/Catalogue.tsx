import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {LotsService} from '../../services/LotsService';
import CatalogueItem from './CatalogueItem';

export default function Catalogue() {
  const [lots, setLots] = useState<CatalogueItemModel[]>()

  useEffect(() => {
    LotsService.getLots().then(data => setLots(data.lots))
  }, []);

  function deleteLot(id: string) {
    LotsService.deleteLot(id).then(() =>
      setLots(prevState => prevState?.filter(lot => lot.id !== id)))
  }

  return (
    <div className='py-2 px-10'>
      <table className="min-w-full">
        {lots?.map(lot => <CatalogueItem
          item={lot}
          deleteItem={() => deleteLot(lot.id)}
        />)}
      </table>
    </div>
  )
}
