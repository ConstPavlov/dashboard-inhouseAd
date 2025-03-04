import React from 'react';
import { useCards } from '../../app/';
import { CardList } from '../../features';
import { EmptyHandler, Filter, Search } from '../../widget';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { result } = useCards();
  React.useEffect(() => {}, []);

  return (
    <div className={styles.wrapper}>
      <Search />
      <Filter />
      <EmptyHandler data={result}>
        <CardList />
      </EmptyHandler>
    </div>
  );
};

export default Dashboard;
