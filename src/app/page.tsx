import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.animateFadeUp}>The Green Cross Wildlife of Goa (NGO)</h1>
          <p className={styles.animateFadeUpDelay}>One of Goa's oldest Rescue, Release, Rehabilitation, Conservation, Awareness programs and Training session Centre.</p>
          <div className={`${styles.heroButtons} ${styles.animateFadeUpDelayMore}`}>
            <Link href="/about" className={`btn ${styles.learnMoreBtn}`}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className={styles.statsSection}>
        <div className="container grid-3" style={{ position: 'relative', zIndex: 1 }}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div className={styles.statNumber}><AnimatedCounter end={28627} /></div>
            <div className={styles.statLabel}>Total animal rescued</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </div>
            <div className={styles.statNumber}><AnimatedCounter end={18892} /></div>
            <div className={styles.statLabel}>Awareness sessions</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div className={styles.statNumber}><AnimatedCounter end={17623} /></div>
            <div className={styles.statLabel}>Save Wild Life</div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className={`section-padding ${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutHeader}>
            <h2>Aims and Objectives</h2>
            <p>Our aim is to protect wildlife and foster a deeper connection between humans and nature through education, rescue, and rehabilitation.</p>
          </div>
          <div className={styles.objectivesGrid}>
            <div className={styles.objectiveCard}>
              <div className={styles.objectiveNumber}>01</div>
              <h3>Sensitize Public</h3>
              <p>Sensitize the public about wildlife conservation through active involvement of students.</p>
            </div>
            <div className={styles.objectiveCard}>
              <div className={styles.objectiveNumber}>02</div>
              <h3>Volunteer Network</h3>
              <p>Build up a strong network of dedicated volunteers in various parts of the state.</p>
            </div>
            <div className={styles.objectiveCard}>
              <div className={styles.objectiveNumber}>03</div>
              <h3>Identify Resources</h3>
              <p>Identify and nurture potential resource persons existing among the student community.</p>
            </div>
            <div className={styles.objectiveCard}>
              <div className={styles.objectiveNumber}>04</div>
              <h3>Highlight Importance</h3>
              <p>Highlight the critical importance of wildlife conservation among all stakeholders.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', position: 'relative', zIndex: 1 }}>
            <Link href="/about" className="btn btn-primary">Read Our Full Story</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Dedicated actions towards a greener, safer environment for India's wildlife.</p>
          </div>
          <div className="grid-3">
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚕️</div>
              <h3>Rescue & Rehab</h3>
              <p>Providing immediate medical attention and safe rehabilitation for injured wildlife.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📢</div>
              <h3>Awareness</h3>
              <p>Conducting programs to educate the public on wildlife conservation.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🦜</div>
              <h3>Bird Walk & Nature Trail</h3>
              <p>Guided tours to appreciate and understand local flora and fauna.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/service" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Rescues Preview */}
      <section className={`section-padding ${styles.rescuesSection}`}>
        <div className="container">
          <div className="section-title">
            <h2>Some Of Our Rescues</h2>
            <p>Meet the incredible wildlife we have had the honor of rescuing and protecting.</p>
          </div>
          <div className="grid-3">
            <div className={styles.animalCard}>
              <img src="/img/king_cobra.png" alt="King Cobra" className={styles.animalImage} />
              <div className={styles.animalInfo}>
                <h3>King Cobra</h3>
              </div>
            </div>
            <div className={styles.animalCard}>
              <img src="/img/porcupine.png" alt="Porcupine" className={styles.animalImage} />
              <div className={styles.animalInfo}>
                <h3>Porcupine</h3>
              </div>
            </div>
            <div className={styles.animalCard}>
              {/* Using a placeholder for now until user adds real image */}
              <img src="/img/hero_bg.png" alt="Indian Spectacled Cobra" className={styles.animalImage} />
              <div className={styles.animalInfo}>
                <h3>Indian Spectacled Cobra</h3>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/rescues" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--dark-green)' }}>View All Rescues</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
