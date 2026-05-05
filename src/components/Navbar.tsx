'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/img/logo.jpeg" alt="Green Cross Goa" width={250} height={70} style={{ objectFit: 'contain' }} unoptimized={true} />
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
          <button onClick={() => setIsDonateOpen(true)} className={`btn ${styles.donateBtn}`}>Donate</button>
        </div>

        <button className={styles.mobileMenuBtn}>
          ☰
        </button>
      </div>

      {isDonateOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsDonateOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsDonateOpen(false)}>×</button>
            <h3>Support Our Wildlife Rescues</h3>
            <div className={styles.qrContainer}>
              <object data="/img/greencross_QR_Scanner.pdf#view=Fit" type="application/pdf" width="100%" height="100%">
                <p>It appears you don't have a PDF plugin for this browser. <a href="/img/greencross_QR_Scanner.pdf" target="_blank" rel="noopener noreferrer">Click here to download the QR code.</a></p>
              </object>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
              Scan the QR code to donate. Thank you for your support!
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
