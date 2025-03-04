import { Dispatch, SetStateAction } from 'react';
import { ITest } from '../../../shared';

export interface IFilterContext {
  sortBy: string;
  sortDirection: Record<number, 'asc' | 'desc'>;
  setSortBy: Dispatch<SetStateAction<string>>;
  setSortDirection: Dispatch<SetStateAction<Record<number, 'asc' | 'desc'>>>;
  sortedData: (data: any[]) => any;
  toggleSortDirection: (idSort: number) => void;
}
