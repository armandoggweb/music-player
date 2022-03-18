import Link from 'next/link';
import Logo from '../Logo';
import s from './Sidebar.module.css';

const Sidebar = () => {
  const optionLinks = [
    'Home',
    'Search',
    'Your Library',
    'Playlists',
    'Create Playlist',
    'Liked Songs',
  ].map((option) => (
    <li key={option}>
      <Link href='#'>{option}</Link>
    </li>
  ));
  return (
    <aside className={s.root}>
      <Logo />
      <ul>{optionLinks}</ul>
    </aside>
  );
};

export default Sidebar;
