import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 16688,
};

export const sampleWithPartialData: IRegion = {
  id: 11003,
};

export const sampleWithFullData: IRegion = {
  id: 13555,
  nom: 'around',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
