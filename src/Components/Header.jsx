import React from 'react';
import styles from './Header.module.css';
import logo from '../Assets/iconoir_book.png';
import { ReactComponent as ToggleDark } from '../Assets/iconoir_oval-rectangle.svg';
import { ReactComponent as ToogleLight } from '../Assets/iconoir_half-moon.svg';
import { ReactComponent as Bar } from '../Assets/Bar.svg';

const Header = () => {
  const [font, setFont] = React.useState('Sans Serif');

  return (
    <header>
      <div className={styles.centeredDiv}>
        <img src={logo} className={styles.cursor} />
        <div className={styles.rightDiv}>
          <form>
            <select
              className={styles.cursor}
              value={font}
              onChange={({ target }) => {
                setFont(target.value);
              }}
            >
              <option value="Sans Serif">Sans Serif</option>
              <option value="Serif">Serif</option>
              <option value="Mono">Mono</option>
            </select>
          </form>
          <Bar />
          <ToggleDark className={styles.cursor} />
          <ToogleLight className={styles.cursor} />
        </div>
      </div>
    </header>
  );
};

export default Header;
