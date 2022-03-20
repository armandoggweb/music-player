import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Web Clone</title>
        <meta name='description' content='Spotify Web Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sidebar />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
