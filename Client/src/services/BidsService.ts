import {requests} from './HttpClient';
import {AddBidModel} from '../models/AddBidModel';
import {BidModel} from '../models/BidModel';

export const BidsService = {
  getBids: (lotId: string): Promise<BidModel[]> => requests.get(`/bids?lotId=${lotId}`),
  addBid: (bid: AddBidModel) => requests.post('/bids', bid)
}