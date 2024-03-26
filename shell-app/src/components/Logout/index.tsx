'use client';

import IconLogout from '@/components/Icons/IconLogout';
import { STORAGE_TOKEN } from '@/constants/storage';
import { logout } from '@/store';
import { useDispatch } from 'react-redux';
import { cleanAllowedRoutesGestor } from '@/store/slices/menu/menu.slice';
import styles from './logout.module.scss';

const Logout = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    localStorage.removeItem(STORAGE_TOKEN);
    dispatch(logout());
    dispatch(cleanAllowedRoutesGestor());
    window.location.reload();
  };
  return (
    <button className={styles['logout-button']} onClick={onLogOut}>
      <IconLogout />
      <span className={styles['logout-button__text']}>Cerrar sesión</span>
    </button>
  );
};

export default Logout;