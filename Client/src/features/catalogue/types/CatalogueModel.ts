import {CatalogueItemModel} from './CatalogueItemModel';

export interface CatalogueModel {
  totalCount: number,
  lots: CatalogueItemModel[]
}