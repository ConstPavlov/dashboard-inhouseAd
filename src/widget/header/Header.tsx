import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/dashboard' || location.pathname === '/') {
      setTitle('Dashboard');
    } else if (/^\/results\/\d+$/.test(location.pathname)) {
      setTitle('Results');
    } else if (/^\/finalize\/\d+$/.test(location.pathname)) {
      setTitle('Finalize');
    }
  }, [location.pathname, title]);

  return (
    <header>{title ? <h1 className={styles.title}>{title}</h1> : ''}</header>
  );
};
