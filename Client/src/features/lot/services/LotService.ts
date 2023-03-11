import {requests} from '../../../lib/HttpClient';
import {CatalogueItemModel} from '../../catalogue/types/CatalogueItemModel';

export const LotService = {
  getLot: (id: string): Promise<CatalogueItemModel> => requests.get(`/lots/${id}`, {}),
}