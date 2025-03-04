import React from 'react';
import { useCards } from '../../../app/index';
import { useSearch } from '../../../app/index';
import { Button } from '../../../shared';
import styles from './ResetSearch.module.scss';

export const ResetSearch: React.FC = () => {
  const { setResult, cards } = useCards();
  const { setCard } = useSearch();
  const handleReset = () => {
    setResult(cards);
    setCard('');
  };
  return (
    <Button styleBtn={styles.btnReset} clickFn={handleReset}>
      Reset
    </Button>
  );
};
