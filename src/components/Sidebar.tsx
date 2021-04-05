import useEvaIcon from '../hooks/useEvaIcon';
import * as pathMatch from 'path-to-regexp';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

function Sidebar() {
  useEvaIcon();
  const router = useRouter();
  const Routes = {
    dashboard: ['/dashboard'],
    profile: ['/profile'],
  };
  const getMenuClassName = useCallback(
    (param: keyof typeof Routes) => {
      const current: string[] = Routes[param];
      if (current) {
        const isCheck = current.some((pathItem) =>
          pathMatch.pathToRegexp(pathItem).test(router.pathname)
        );
        if (isCheck) {
          return 'sidebar__menu sidebar__menu--active';
        }
      }
      return 'sidebar__menu';
    },
    [router.pathname]
  );
  return (
    <div className="sidebar">
      <a href="#" className="sidebar__logo-container">
        <h1 className="sidebar__logo sidebar__logo--text">S|M</h1>
        <p className="sidebar__logo-name">Sistem Informasi Organisasi</p>
      </a>
      <a href="/dashboard" className={getMenuClassName('dashboard')}>
        <i className="sidebar__menu-icon" data-eva="home-outline" />
        <p className="sidebar__menu-text">Dashboard</p>
      </a>
      <div className="sidebar__menu-spacer" />
      <h5 className="sidebar__menu-title">Profile</h5>
      <a href="/profile" className={getMenuClassName('profile')}>
        <i className="sidebar__menu-icon" data-eva="person-outline" />
        <p className="sidebar__menu-text">Profil Saya</p>
      </a>
      <div className="sidebar__menu-spacer" />
      <h5 className="sidebar__menu-title">Keorganisasian</h5>
      <a href="#" className="sidebar__menu">
        <i className="sidebar__menu-icon" data-eva="folder-outline" />
        <p className="sidebar__menu-text">Daftar Komisariat</p>
      </a>
      <div className="sidebar__menu-spacer" />
      <h5 className="sidebar__menu-title">Lembaga semi otonom</h5>
      <a href="#" className="sidebar__menu">
        <i className="sidebar__menu-icon" data-eva="people-outline" />
        <p className="sidebar__menu-text">Korps Instruktur</p>
      </a>
      <div className="sidebar__menu-spacer" />
      <h5 className="sidebar__menu-title">Creative Minority</h5>
      <a href="#" className="sidebar__menu">
        <i className="sidebar__menu-icon" data-eva="people-outline" />
        <p className="sidebar__menu-text">MIM</p>
      </a>
      <a href="#" className="sidebar__menu">
        <i className="sidebar__menu-icon" data-eva="people-outline" />
        <p className="sidebar__menu-text">MKM</p>
      </a>
    </div>
  );
}

export default Sidebar;
