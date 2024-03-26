'use client';

import { FC, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/logo.svg';
import Logout from '../Logout';
import { useGetMenuByRoleQuery } from '@/services/client/menu/menu.service';
import { useDispatch } from 'react-redux';
// import Loader from '@/components/atoms/loader';
import { toast } from 'react-toastify';
import { setAllowedRoutesGestor } from '@/store/slices/menu/menu.slice';
import { IMenuOption } from '@/services/client/menu/menu.interface';
import styles from './sidebar.module.scss';

const MenuOptions: FC<{ options: IMenuOption[] }> = ({ options }) => {
  const pathname = usePathname();

  return options
    .filter(option => option.flagVisible)
    .map(option => (
      <span
        key={option.idOption}
        className={`${styles['sidebar-gestor__section-option']} ${
          pathname === option.path ? styles['sidebar-gestor__section-option--active'] : ''
        }`}
      >
        <Link href={option.path}>{option.name}</Link>
      </span>
    ));
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const { data: menuData, isError, isFetching, isLoading, isSuccess } = useGetMenuByRoleQuery();

  useEffect(() => {
    if (!isLoading && !isFetching && isSuccess) {
      const allowedRoutes = menuData
        .map(menu => menu.options)
        .flat()
        .map(item => item.path);

      dispatch(setAllowedRoutesGestor(allowedRoutes || []));
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if (!isLoading && !isFetching && isError) {
      toast.error('Error al obtener el menú del usuario', {
        autoClose: 3500
      });
    }
  }, [isError]);

  return (
    <div className={styles['sidebar-gestor']}>
      <div className={styles['sidebar-gestor__header']}>
        <Image src={logo} width={56} height={40} alt='Web Gestor Pidelo' />
        <span className={styles['sidebar-gestor__header-text']}>Gestor</span>
      </div>

      <div className={styles['sidebar-gestor__body']}>
        {isLoading || isFetching ? <div /> : null}

        {!isLoading && !isFetching && isSuccess && (
          <>
            {menuData.map(menu => {
              const hasVisibleOptions = menu.options.some(option => option.flagVisible);

              return (
                hasVisibleOptions && (
                  <div className={styles['sidebar-gestor__section']} key={menu.idMenu}>
                    <span className={styles['sidebar-gestor__section-title']}>{menu.name}</span>
                    <MenuOptions options={menu.options} />
                  </div>
                )
              );
            })}
          </>
        )}
      </div>

      <div className={styles['sidebar-gestor__logout']}>
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
