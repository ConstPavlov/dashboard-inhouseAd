import React from 'react';
import ArrowIcon from '../../app/assets/Vector.svg';
import { useCards } from '../../app/hooks/useCards';
import { useFilters } from '../../app/hooks/useFilters';
import { filtersNames } from '../../shared';
import styles from './Filter.module.scss';

export const Filter: React.FC = () => {
  const { toggleSortDirection, setSortBy, sortBy, sortedData, sortDirection } =
    useFilters();
  const { setResult, result, sites } = useCards();

  const handleClickFilter = (idSort: number, name: string) => {
    const normalized = name === 'SITE' ? 'SITE' : name.toLowerCase();
    if (normalized !== sortBy) {
      setSortBy(normalized);
      toggleSortDirection(idSort);
      console.log(idSort, name, 'tooglesort&setSortBy');
    } else {
      console.log(idSort, 'tooglesort');
      toggleSortDirection(idSort);
    }
  };

  React.useEffect(() => {
    const sorted = sortedData(result);
    // console.log(cards);
    setResult(sorted);
  }, [sortBy, sortDirection]);
  return (
    <div className={styles.filters}>
      <div className={styles.left}>
        <div className={styles.filter} key={filtersNames[0].id}>
          <div className={styles.text}>{filtersNames[0].name}</div>
          <div
            onClick={() =>
              handleClickFilter(filtersNames[0].id, filtersNames[0].name)
            }
            className={styles.iconDiv}
          >
            <img
              className={`${styles.icon} ${
                sortBy === filtersNames[0].name.toLowerCase()
                  ? sortDirection[filtersNames[0].id] === 'asc'
                    ? styles.asc
                    : styles.desc
                  : ''
              }`}
              src={ArrowIcon}
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {filtersNames
          .filter(fil => fil.id !== 1)
          .map(item => (
            <div className={styles.filter} key={item.id}>
              <div className={styles.text}>{item.name}</div>
              <div
                onClick={() => handleClickFilter(item.id, item.name)}
                className={styles.iconDiv}
              >
                <img
                  className={`${styles.icon} ${
                    sortBy === item.name.toLowerCase()
                      ? sortDirection[item.id] === 'asc'
                        ? styles.asc
                        : styles.desc
                      : ''
                  }`}
                  src={ArrowIcon}
                  alt="arrow icon"
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
