import { BackArrow, ForwardArrow } from '../Icons';
import s from './TopbarNav.module.css';

export default function TopbarNav() {
  return (
    <nav className={s.root}>
      <div className={s.arrowButtons}>
        <button>
          <BackArrow />
        </button>
        <button>
          <ForwardArrow />
        </button>
      </div>
      <div className={s.loginButtons}>
        <button>SIGN UP</button>
        <button>LOG IN</button>
      </div>
    </nav>
  );
}
