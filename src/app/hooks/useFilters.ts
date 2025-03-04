import React from 'react';
import { FilterContext } from '../context/filter-context/FilterContext';

export const useFilters = () => React.useContext(FilterContext);
