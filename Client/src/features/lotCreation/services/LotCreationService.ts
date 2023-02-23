import {requests} from '../../../core/HttpClient';
import {CreateLotModel} from '../types/CreateLotModel';

export const LotCreationService = {
  createLot: (lot: CreateLotModel) => requests.post('/lots', lot, true),
}