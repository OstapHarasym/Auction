import {requests} from './HttpClient';
import {CatalogueItemModel} from '../models/CatalogueItemModel';
import {CreateLotModel} from '../models/CreateLotModel';
import {CatalogueModel} from '../models/CatalogueModel';

export const LotsService = {
  getLots: (): Promise<CatalogueModel> => requests.get('/lots', {}),
  getLot: (id: string): Promise<CatalogueItemModel> => requests.get(`/lots/${id}`, {}),
  createLot: (lot: CreateLotModel) => requests.post('/lots', lot),
  deleteLot: (id: string) => requests.delete(`/lots/${id}`)
}
