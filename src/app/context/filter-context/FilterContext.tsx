import React, { createContext, PropsWithChildren } from 'react';
import { filtersNames } from '../../../shared';
import { IFilterContext } from './search-context.i';

export const FilterContext = React.createContext({} as IFilterContext);
const FilterProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [sortBy, setSortBy] = React.useState<string>('name');
  const [sortDirection, setSortDirection] = React.useState<
    Record<number, 'asc' | 'desc'>
  >({});

  const toggleSortDirection = React.useCallback((id: number) => {
    setSortDirection(prev => ({
      ...prev,
      [id]: prev[id] === 'asc' ? 'desc' : 'asc',
    }));
    console.log(sortDirection);
  }, []);

  const sortedData = React.useMemo(() => {
    console.log(sortBy);
    return (data: any[]) => {
      return [...data].sort((a, b) => {
        let value1 = a[sortBy];
        let value2 = b[sortBy];
        const fieldMapping: { [key: string]: string } = {
          SITE: 'siteId',
        };
        const sortByFinaly = fieldMapping[sortBy] || sortBy;
        console.log(sortByFinaly);

        value1 = a[sortByFinaly];
        value2 = b[sortByFinaly];
        const currentId =
          filtersNames.find(
            elem =>
              (elem.name === 'SITE' ? 'SITE' : elem.name.toLowerCase()) ===
              sortBy,
          )?.id || 1;

        console.log(currentId);
        const isAsc = sortDirection[currentId] || 'asc';

        let comparison = 0;
        if (typeof value1 === 'number' && typeof value2 === 'number') {
          comparison = value1 - value2;
        } else {
          const str1 = value1.toString().toLowerCase();
          const str2 = value2.toString().toLowerCase();
          comparison = str1 > str2 ? 1 : -1;
        }
        return isAsc === 'asc' ? comparison : -comparison;
      });
    };
  }, [sortBy, sortDirection]);

  // console.log('sortBy:', sortBy);
  // console.log('sortDirection:', sortDirection);
  // console.log('sortedData:', sortedData);
  // console.log('setSortBy:', setSortBy);
  // console.log('setSortDirection:', setSortDirection);

  return (
    <FilterContext.Provider
      value={{
        setSortBy,
        sortBy,
        sortDirection,
        setSortDirection,
        sortedData,
        toggleSortDirection,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
