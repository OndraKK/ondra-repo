import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <div>
        <Link href="/">
            <img src="/images/my-logo.png" alt="Logo" />
        </Link>
        </div>
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/hiring" className={styles.link}>
              HIRING
            </Link>
          </li>
          <li>
            <Link href="/ma" className={styles.link}>
              M&A
            </Link>
          </li>
          <li>
            <Link href="/learning" className={styles.link}>
              LEARNING
            </Link>
          </li>
          <li>
            <Link href="/audit" className={styles.link}>
              AUDIT
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className={styles.link}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMobileNav} className={styles.mobileNav}>
        &#9776;
      </button>
      {mobileNavVisible && (
        <nav className={styles.mobileNavLinks}>
        <ul>
          <li>
            <Link href="/hiring" className={styles.link}>HIRING</Link>
          </li>
          <li>
            <Link href="/ma" className={styles.link}>M&A</Link>
          </li>
          <li>
            <Link href="/learning" className={styles.link}>LEARNING</Link>
          </li>
          <li>
            <Link href="/audit" className={styles.link}>AUDIT</Link>
          </li>
          <li>
            <Link href="/kontakt" className={styles.link}>KONTAKT</Link>
          </li>
        </ul>
      </nav>
    )}
    </header>
  );
};

export default Navbar;