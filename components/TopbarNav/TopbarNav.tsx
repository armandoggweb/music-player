import Arrow from '../Icons/Arrow';
import s from './TopbarNav.module.css';

export default function TopbarNav() {
  return (
    <nav className={s.root}>
      <div className={s.arrowButtons}>
        <button>
          <Arrow />
        </button>
        <button>
          <Arrow forward={true} />
        </button>
      </div>
      <div className={s.loginButtons}>
        <button>SIGN UP</button>
        <button>LOG IN</button>
      </div>
    </nav>
  );
}
