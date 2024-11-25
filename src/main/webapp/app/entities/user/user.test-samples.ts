import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 27168,
  login: '$Z{2^1@I\\gZ5\\RpVV\\rD3b\\_0fo\\*u4SyY',
};

export const sampleWithPartialData: IUser = {
  id: 29997,
  login: 'Qw.',
};

export const sampleWithFullData: IUser = {
  id: 7763,
  login: 'A',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
