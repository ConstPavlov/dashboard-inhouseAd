import { Dispatch, SetStateAction } from 'react';
import { ITest } from '../../../shared';

export interface ISearchContext {
  card: string;
  setCard: Dispatch<SetStateAction<string>>;
}
