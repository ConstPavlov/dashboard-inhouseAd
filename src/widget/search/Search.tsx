import React from 'react';
import { ITest } from '../../shared';
import { searchFilter } from './utils/searchFilter';
import styles from './Search.module.scss';
import { useCards } from '../../app/hooks/useCards';
import { useSearch } from '../../app/hooks/useSearch';
import SearchIcon from '../../app/assets/Search.svg';

export const Search = () => {
  const { setResult, setSites, sites, cards, result } = useCards();
  const { card, setCard } = useSearch();

  const inputEl = React.useRef<HTMLInputElement>(null);
  const handleChangeInput = (value: any) => {
    setCard(value);
    const data = searchFilter(value, cards);
    setResult(data);
  };
  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={SearchIcon} alt="search icon" />
      <input
        ref={inputEl}
        onInput={(e: any) => handleChangeInput(e.target.value)}
        value={card}
        type="text"
        placeholder="What test are you looking for?"
        className={styles.input}
      />
      <span className={styles.resultText}>{result.length} tests</span>
    </div>
  );
};
