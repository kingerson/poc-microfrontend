'use client';

import { useAppSelector } from '@/store/hooks';
import styles from './username.module.scss';

const UserName = () => {
  const { fullName } = useAppSelector(state => state.user);

  return <span className={styles['header-user-name']}>Bienvenido: {fullName ?? 'Hola'}</span>;
};

export default UserName;