import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {CatalogueItemModel} from '../../models/CatalogueItemModel';
import {LotsService} from '../../services/LotsService';
import BidModal from './BidModal';
import BidList from './BidList';

export default function Lot() {
  const { id } = useParams<string>()
  const [lot, setLot] = useState<CatalogueItemModel>()
  const [bidModalOpen, setBidModalOpen] = useState(false)

  useEffect(() => {
    LotsService.getLot(id ?? '').then(data => setLot(data))
  }, [id])

  return (
    <>
      {!bidModalOpen ? (
        <>
          <h2>Title: {lot?.title}</h2>
          <h2>Current bid: {lot?.startingPrice}</h2>
          <button onClick={() => setBidModalOpen(true)} className='bg-blue-600 py-1 px-5 m-1'>Bid</button>
          <BidList lotId={lot?.id}/>
        </>
      ) : (<BidModal closeModal={() => setBidModalOpen(false)} lotId={lot?.id}/>)}
    </>
  )
}
