import CardsProvider from '../context/cards-context/CardsContext';
import FilterProvider from '../context/filter-context/FilterContext';
import SearchProvider from '../context/search-context/SearchContext';

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <CardsProvider>
    <SearchProvider>
      <FilterProvider>{children}</FilterProvider>
    </SearchProvider>
  </CardsProvider>
);
