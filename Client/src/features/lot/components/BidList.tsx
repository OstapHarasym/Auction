import {useEffect, useState} from 'react';
import {BidService} from '../services/BidService';
import {BidModel} from '../types/BidModel';
import {HubConnectionBuilder} from '@microsoft/signalr';
import {backendUrl} from '../../../lib/HttpClient';

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
      {bids?.map((bid) => <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          {bid.amount}
        </th>
        <td className="px-6 py-4">
          {bid.bidderName}
        </td>
        <td className="px-6 py-4">
          {`${bid.bidTime?.toString()}`}
        </td>
      </tr>)}
    </>
  )
}
