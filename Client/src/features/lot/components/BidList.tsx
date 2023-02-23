import {useEffect, useState} from 'react';
import {BidService} from '../services/BidService';
import {BidModel} from '../types/BidModel';
import {HubConnectionBuilder} from '@microsoft/signalr';
import {backendUrl} from '../../../core/HttpClient';

interface Props {
  lotId?: string
}

export default function BidList(props: Props) {
  const [bids, setBids] = useState<BidModel[]>()

  async function subscribeToLot(lotId: string) {
    const connection = new HubConnectionBuilder()
      .withUrl(`${backendUrl}/bids/connect`)
      .build()

    connection.on('refreshBids', () => {
      BidService.getBids(lotId).then(data => setBids(data))
    })

    await connection.start()
    await connection.invoke('SubscribeToBidsRefresh', lotId)
  }

  useEffect(() => {
    if (props.lotId) {
      BidService.getBids(props.lotId).then(data => setBids(data))
      subscribeToLot(props.lotId)
    }
  }, [props.lotId])

  return (
    <>
      <p>Total bids: {bids?.length}</p>
      {bids?.map((bid) => <p>{bid.amount}</p>)}
    </>
  )
}
