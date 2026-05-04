'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Green<span>Cross</span> Goa
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={pathname === '/' ? styles.active : styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : styles.navLink}>
            About Us
          </Link>
          <Link href="/service" className={pathname === '/service' ? styles.active : styles.navLink}>
            Services
          </Link>
          <Link href="/rescues" className={pathname === '/rescues' ? styles.active : styles.navLink}>
            Our Rescues
          </Link>
        </div>

        <div className={styles.actions}>
          <a href="tel:09822123042" className="btn btn-outline">Emergency: 09822123042</a>
          <Link href="#donate" className="btn btn-primary">Donate</Link>
        </div>

        <button className={styles.mobileMenuBtn}>
          ☰
        </button>
      </div>
    </nav>
  );
}
