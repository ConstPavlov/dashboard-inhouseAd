import React from 'react';
import { ResetSearch } from '../../features';
import styles from './EmptyDashboard.module.scss';

const EmptyDashboard = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Your search did not match any results.</h2>
      <ResetSearch />
    </div>
  );
};

export default EmptyDashboard;
