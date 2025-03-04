import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { getDomainName } from '../utils/getDomainName';
import { ICard } from './card.interface';
import styles from './Card.module.scss';

export const Card: React.FC<ICard> = ({
  site,
  card,
  isDraft,
  TextButton,
  colorStatus = '#FF8346',
}) => {
  const isPurpleBorder = card.siteId === 3;
  const isLavandaBorder = card.siteId === 2;
  return (
    <div
      className={classNames(styles.card, {
        [styles.purpleBorder]: isPurpleBorder,
        [styles.lavandaBorder]: isLavandaBorder,
      })}
      key={card.id}
    >
      <div className={styles.left}>{card.name}</div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className={classNames(styles.info__item, styles.type)}>
            {card.type !== 'MVT'
              ? card.type
                  .toLowerCase()
                  .replace(/_/g, '-')
                  .replace(/^\w/, c => c.toUpperCase())
              : card.type}
          </div>
          <div
            style={{ color: colorStatus }}
            className={classNames(styles.info__item, styles.status)}
          >
            {card.status
              .toLowerCase()
              .replace(/_/g, '-')
              .replace(/^\w/, c => c.toUpperCase())}
          </div>
          <div className={classNames(styles.info__item, styles.site)}>
            {getDomainName(site)}
          </div>
        </div>
        <Link
          className={styles.buttonLink}
          to={isDraft ? `/finalize/${card.id}` : `/results/${card.id}`}
        >
          <Button color={TextButton === 'Finalize' ? '#7D7D7D' : '#2EE5AC'}>
            {TextButton}
          </Button>
        </Link>
      </div>
    </div>
  );
};
