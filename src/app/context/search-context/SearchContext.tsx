import React, { createContext, PropsWithChildren } from 'react';
import { ISearchContext } from './search-context.i';

export const SearchContext = React.createContext({} as ISearchContext);
const SearchProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [card, setCard] = React.useState<string>('');

  return (
    <SearchContext.Provider value={{ card, setCard }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
