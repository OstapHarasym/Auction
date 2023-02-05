import {useEffect, useState} from 'react';
import {BidsService} from '../../services/BidsService';
import {BidModel} from '../../models/BidModel';
import {HubConnectionBuilder} from '@microsoft/signalr';
import {backendUrl} from '../../services/HttpClient';

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
      BidsService.getBids(lotId).then(data => setBids(data))
    })

    await connection.start()
    await connection.invoke('SubscribeToBidsRefresh', lotId)
  }

  useEffect(() => {
    if (props.lotId) {
      BidsService.getBids(props.lotId).then(data => setBids(data))
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
