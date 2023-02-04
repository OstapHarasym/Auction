import {useEffect, useState} from 'react';
import {BidsService} from '../../services/BidsService';
import {BidModel} from '../../models/BidModel';

interface Props {
  lotId?: string
}

export default function BidList(props: Props) {
  const [bids, setBids] = useState<BidModel[]>()

  useEffect(() => {
    if (props.lotId) {
      BidsService.getBids(props.lotId).then(data => setBids(data))
    }
  }, [props.lotId])

  return (
    <>
      <p>Total bids: {bids?.length}</p>
      {bids?.map((bid) => <p>{bid.amount}</p>)}
    </>
  )
}
