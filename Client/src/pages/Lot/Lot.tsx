import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {LotsService} from '../../services/LotsService';

export default function Lot() {
  const { id } = useParams<string>()
  const [lot, setLot] = useState<CatalogueItemModel>()
  const [bidModalOpen, setBidModalOpen] = useState(false)

  useEffect(() => {
    LotsService.getLot(id ?? '').then(data => setLot(data))
  }, [id])

  function openModal(open: boolean) {
    setBidModalOpen(open)
  }

  return (
    <>
      {!bidModalOpen && (
        <>
          <h2>Title: {lot?.title}</h2>
          <h2>Current bid: {lot?.startingPrice}</h2>
        </>
      )}
    </>
  )
}
