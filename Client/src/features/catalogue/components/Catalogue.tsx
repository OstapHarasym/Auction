import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../types/CatalogueItemModel';
import {CatalogueService} from '../services/CatalogueService';
import CatalogueItem from './CatalogueItem';

export default function Catalogue() {
  const [lots, setLots] = useState<CatalogueItemModel[]>()

  useEffect(() => {
    CatalogueService.getLots().then(data => setLots(data.lots))
  }, []);

  return (
    <div className='py-2 px-10'>
      <table className="min-w-full">
        {lots?.map(lot => <CatalogueItem
          item={lot}
        />)}
      </table>
    </div>
  )
}
