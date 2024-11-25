import { IVille, NewVille } from './ville.model';

export const sampleWithRequiredData: IVille = {
  id: 10828,
};

export const sampleWithPartialData: IVille = {
  id: 30753,
  nom: 'unless',
  codePostal: 'next',
};

export const sampleWithFullData: IVille = {
  id: 2508,
  nom: 'toward alongside',
  codePostal: 'before',
  nbHabitants: 3550,
};

export const sampleWithNewData: NewVille = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
