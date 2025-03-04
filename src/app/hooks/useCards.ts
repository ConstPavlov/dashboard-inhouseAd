import React from 'react';
import { CardsContext } from '../context/cards-context/CardsContext';

export const useCards = () => React.useContext(CardsContext);
