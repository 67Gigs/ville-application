import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7471b09a-edd3-4e43-bf62-f31785bd544b',
};

export const sampleWithPartialData: IAuthority = {
  name: '17d43dbb-1fb8-4008-a85c-0fa38c73f28b',
};

export const sampleWithFullData: IAuthority = {
  name: '07355702-d948-4a2e-ae2a-ffbdb22a3083',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
