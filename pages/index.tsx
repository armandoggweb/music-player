import type { NextPage } from 'next';
import Head from 'next/head';
import SidebarNav from '../components/SidebarNav/SidebarNav';
import TopbarNav from '../components/TopbarNav';
import s from '../styles/Layout.module.css';

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>Spotify Web Clone</title>
        <meta name='description' content='Spotify Web Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SidebarNav />
      <TopbarNav />
      <main></main>
    </div>
  );
};

export default Home;
