import { ISite, ITest } from '../../shared';

export interface ICard {
  colorStatus: string;
  TextButton: string;
  isDraft: boolean;
  card: ITest;
  site: string;
}
