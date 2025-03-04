import React, { createContext, PropsWithChildren } from 'react';
import {
  getSites,
  getTests,
} from '../../../features/card-list/api/asyncFunction';
import { ICardsContext, TypeCards, TypeSites } from './cards.context.interface';

export const CardsContext = React.createContext({} as ICardsContext);
const CardsProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [cards, setCards] = React.useState<TypeCards>([]);
  const [sites, setSites] = React.useState<TypeSites>([]);
  const [result, setResult] = React.useState<TypeCards>([]);
  React.useEffect(() => {
    const fetching = async () => {
      const dataCards = await getTests();
      setCards(dataCards);
      const dataSites = await getSites();
      setSites(dataSites);
      setResult(dataCards);
    };
    if (cards.length === 0) {
      fetching();
    }
  }, []);
  return (
    <CardsContext.Provider
      value={{ cards, setCards, sites, setSites, result, setResult }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
