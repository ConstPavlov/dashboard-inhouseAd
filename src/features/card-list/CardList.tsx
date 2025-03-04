import React from 'react';
import { ITest } from '../../shared';
import { Card } from '../../entites';
import { getSites, getTests } from './api/asyncFunction';
import { getColorStatus } from './helpers/getColorStatus';
import { getSiteUrl } from './helpers/getSiteUrl';
import styles from './CardList.module.scss';
import { formatData } from './helpers/formatting/formatData';
import { useCards } from '../../app/index';

export const CardList = () => {
  const { setCards, setResult, setSites, sites, cards, result } = useCards();
  const handleClick = () => {};
  return (
    <div className={styles.cards}>
      {result.length > 0 &&
        sites.length > 0 &&
        result.map((card: ITest) => (
          <Card
            key={card.id}
            isDraft={card.status === 'DRAFT' ? true : false}
            colorStatus={getColorStatus(card.status)}
            site={getSiteUrl(card.siteId, sites)}
            TextButton={card.status === 'DRAFT' ? 'Finalize' : 'Results'}
            card={card}
          />
        ))}
    </div>
  );
};
