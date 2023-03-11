import {requests} from '../../../lib/HttpClient';
import {AddBidModel} from '../types/AddBidModel';
import {BidModel} from '../types/BidModel';

export const BidService = {
  getBids: (lotId: string): Promise<BidModel[]> => requests.get(`/bids?lotId=${lotId}`, {}),
  addBid: (bid: AddBidModel) => requests.post('/bids', bid, true)
}