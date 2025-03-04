import { Dispatch, SetStateAction } from 'react';
import { ISite, ITest } from '../../../shared';

export type TypeCards = ITest[];
export type TypeSites = ISite[];

export interface ICardsContext {
  cards: TypeCards;
  setCards: Dispatch<SetStateAction<ITest[]>>;
  sites: TypeSites;
  setSites: Dispatch<SetStateAction<ISite[]>>;
  result: TypeCards;
  setResult: Dispatch<SetStateAction<ITest[]>>;
}
