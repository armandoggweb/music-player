import { PropsWithChildren, ReactNode } from 'react';
import SidebarNav from '../../components/SidebarNav';
import TopbarNav from '../../components/TopbarNav';
import s from '../../styles/Layout.module.css';

const Layout = ({ children }: PropsWithChildren<ReactNode>) => {
  return (
    <div className={s.container}>
      <SidebarNav />
      <TopbarNav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
