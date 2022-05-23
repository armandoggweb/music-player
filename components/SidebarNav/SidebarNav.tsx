import Link from 'next/link';
import Logo from '../Logo';
import {
  CreatePlaylist,
  Home,
  LikedSongs,
  Search,
  YourLibrary,
} from '../Icons';
import s from './SidebarNav.module.css';

type MenuOptions = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};
const menuOptions = [
  { name: 'Home', href: '#', icon: <Home /> },
  { name: 'Search', href: '#', icon: <Search /> },
  { name: 'Your Library', href: '#', icon: <YourLibrary /> },
];

const buttonsOptions = [
  { name: 'Create Playlist', href: '#', icon: <CreatePlaylist /> },
  { name: 'Liked Songs', href: '#', icon: <LikedSongs /> },
];

const menu = (options: MenuOptions[]) => {
  return options.map((option) => (
    <li key={option.name} className={s.menuOption}>
      {option.icon}
      <Link href={option.href}>{option.name}</Link>
    </li>
  ));
};

const buttons = (options: MenuOptions[]) => {
  return options.map((option) => (
    <button key={option.name} className={s.menuOption}>
      {option.icon}
      <Link href={option.href}>{option.name}</Link>
    </button>
  ));
};

const footerOptions = [
  { name: 'Cookies', href: '#' },
  { name: 'Privacy', href: '#' },
];
const footer = (options: MenuOptions[]) => {
  return options.map((option) => (
    <li key={option.name} className={s.menuOption}>
      <Link href={option.href}>{option.name}</Link>
    </li>
  ));
};

const SidebarNav = () => {
  return (
    <aside className={s.root}>
      <Logo />
      <ul>{menu(menuOptions)}</ul>
      <div className={s.secondaryMenu}>
        <div>{buttons(buttonsOptions)}</div>
        <footer>{footer(footerOptions)}</footer>
      </div>
    </aside>
  );
};

export default SidebarNav;
