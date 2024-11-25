import dayjs from 'dayjs/esm';

import { IJoueur, NewJoueur } from './joueur.model';

export const sampleWithRequiredData: IJoueur = {
  id: 13791,
};

export const sampleWithPartialData: IJoueur = {
  id: 5840,
  motDePasse: 'digitize',
  estAdministrateur: false,
};

export const sampleWithFullData: IJoueur = {
  id: 30331,
  pseudo: 'finished quickly flash',
  motDePasse: 'reword sad meh',
  dateInscription: dayjs('2024-11-25T08:46'),
  estAdministrateur: true,
};

export const sampleWithNewData: NewJoueur = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
