import React from 'react';
import { useParams } from 'react-router-dom';
import { getOneTest } from '../../features/card-list/api/asyncFunction';
import { ITest } from '../../shared';
import styles from './Finalize.module.scss';

const Finalize = () => {
  const [card, setCard] = React.useState<ITest | null>(null);
  const { id } = useParams();
  React.useEffect(() => {
    const fetching = async () => {
      const oneCard = await getOneTest(Number(id));
      setCard(oneCard);
    };
    fetching();
  }, []);
  React.useEffect(() => {}, [id]);
  return <div className={styles.wrapper}>{card?.name}</div>;
};

export default Finalize;
