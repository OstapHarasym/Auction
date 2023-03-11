import {requests} from '../../../lib/HttpClient';
import {CatalogueModel} from '../types/CatalogueModel';

export const CatalogueService = {
  getLots: (): Promise<CatalogueModel> => requests.get('/lots', {}),
}
