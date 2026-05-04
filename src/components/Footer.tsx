import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandInfo}>
          <h3 className={styles.logo}>Green<span>Cross</span> Goa</h3>
          <p>One of Goa's oldest Rescue, Release, Rehabilitation, Conservation, Awareness programs and Training session Centre.</p>
          <div className={styles.donateSection}>
            <p><strong>Support Our Cause</strong></p>
            <p>Donate to protect endangered species and preserve natural habitats for future generations.</p>
          </div>
        </div>
        
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/service">Our Services</Link></li>
            <li><Link href="/rescues">Our Rescues</Link></li>
            <li><Link href="/about#aims">Aims and Objectives</Link></li>
          </ul>
        </div>
        
        <div className={styles.contactInfo}>
          <h4>Contact Us</h4>
          <ul>
            <li>📍 128/9, Dattawadi.Mapusa GOA</li>
            <li>📞 <a href="tel:09822123042">09822123042</a> / <a href="tel:08698073818">08698073818</a></li>
            <li>✉️ <a href="mailto:greencrossgoa@gmail.com">greencrossgoa@gmail.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The Green Cross Wildlife of Goa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
