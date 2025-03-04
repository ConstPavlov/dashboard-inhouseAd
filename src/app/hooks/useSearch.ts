import React from 'react';
import { SearchContext } from '../context/search-context/SearchContext';

export const useSearch = () => React.useContext(SearchContext);
