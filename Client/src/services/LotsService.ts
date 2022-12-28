import {requests} from './HttpClient';
import {CatalogueItemModel} from '../models/CatalogueItemModel';

export const LotsService = {
  getLots: (): Promise<CatalogueItemModel[]> => requests.get('/lots'),
  deleteLot: (id: number) => requests.delete('/lots/' + id.toString())
}