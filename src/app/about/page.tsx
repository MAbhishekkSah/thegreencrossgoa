import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Page Title Banner */}
      <section className={styles.pageBanner}>
        <div className="container">
          <h1>About Us</h1>
          <p>
            Dedicated to the frontline protection of Goa’s biodiversity, The Green Cross seamlessly bridges the gap between urban life and the wild through expert rescue operations, community education, and a lifelong commitment to sustainable coexistence.
          </p>
        </div>
      </section>

      {/* Horizontal Timeline Grid Section */}
      <section className={styles.horizontalTimelineSection}>
        <div className="container">
          <div className={styles.timelineWrapper}>
            
            {/* Top Row: Cards point DOWN to the line */}
            <div className={styles.timelineRow}>
              
              {/* Card 1: Foundation */}
              <div className={styles.gridCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardImage}>
                    <img src="/img/about.jpg" alt="Foundation & Legacy" />
                  </div>
                  <div className={styles.cardContent}>
                    <h2>1. Foundation & Legacy</h2>
                    <p>
                      Founded in 1999 under the Society Registration Act, our Goa-based NGO has spent over two decades serving as a dedicated frontline defender of regional wildlife.
                    </p>
                  </div>
                </div>
                {/* Timeline connection pointing down */}
                <div className={styles.pointerDown}></div>
                <div className={styles.nodeDown}></div>
              </div>

              {/* Card 2: Strategic Collaboration */}
              <div className={styles.gridCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardImage}>
                    <img src="/img/Rescue1.jpg" alt="Strategic Collaboration" />
                  </div>
                  <div className={styles.cardContent}>
                    <h2>2. Strategic Collaboration</h2>
                    <p>
                      We operate in seamless coordination with the Goa Forest Department and local authorities to transform conservation goals into measurable on-the-ground impact.
                    </p>
                  </div>
                </div>
                {/* Timeline connection pointing down */}
                <div className={styles.pointerDown}></div>
                <div className={styles.nodeDown}></div>
              </div>

              {/* Card 3: Rescue & Rehabilitation */}
              <div className={styles.gridCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardImage}>
                    <img src="/img/Rescue2.jpeg" alt="Rescue Operations" />
                  </div>
                  <div className={styles.cardContent}>
                    <h2>3. Rescue & Rehabilitation</h2>
                    <p>
                      Our team provides specialized medical treatment and emergency intervention for distressed species ranging from leopards to reptiles, ensuring their safe return to the wild.
                    </p>
                  </div>
                </div>
                {/* Timeline connection pointing down */}
                <div className={styles.pointerDown}></div>
                <div className={styles.nodeDown}></div>
              </div>
            </div>

            {/* The Single Central Timeline Line */}
            <div className={styles.centralLineContainer}>
              <div className={styles.centralLine}></div>
            </div>

            {/* Bottom Row: Cards point UP to the line */}
            <div className={styles.timelineRow}>
              
              {/* Card 4: Education & Empowerment */}
              <div className={styles.gridCard}>
                {/* Timeline connection pointing up */}
                <div className={styles.pointerUp}></div>
                <div className={styles.nodeUp}></div>
                <div className={styles.cardInner}>
                  <div className={styles.cardImage}>
                    <img src="/img/animal-lg-1.jpg" alt="Education & Empowerment" />
                  </div>
                  <div className={styles.cardContent}>
                    <h2>4. Education & Empowerment</h2>
                    <p>
                      Through immersive nature programs and technical training, we inspire the next generation of conservationists and foster a deep community connection with the environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5: Enforcement & Protection */}
              <div className={styles.gridCard}>
                {/* Timeline connection pointing up */}
                <div className={styles.pointerUp}></div>
                <div className={styles.nodeUp}></div>
                <div className={styles.cardInner}>
                  <div className={styles.cardImage}>
                    <img src="/img/Rescue3.jpg" alt="Enforcement & Protection" />
                  </div>
                  <div className={styles.cardContent}>
                    <h2>5. Enforcement & Protection</h2>
                    <p>
                      We actively combat illegal poaching through strategic night patrols and collaborative raids to maintain the safety and integrity of our natural habitats.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Highlight Block (Human-Wildlife Harmony) */}
      <section className={styles.philosophyBlock}>
        <div className="container">
          <p className={styles.philosophyQuote}>
            By bridging the gap between local communities and the animal kingdom, we create a sustainable balance that minimizes conflict and preserves biodiversity.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className={styles.teamSection}>
        <div className={`container ${styles.teamHeader}`}>
          <h2>Meet Our Leadership Team</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
            The dedicated individuals driving wildlife conservation in Goa.
          </p>
        </div>
        
        <div className={styles.teamGrid}>
          {/* Placeholder 1 */}
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <div className={styles.teamAvatarPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h3>[Name Here]</h3>
            <div className={styles.teamRole}>President</div>
          </div>

          {/* Placeholder 2 */}
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <div className={styles.teamAvatarPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h3>[Name Here]</h3>
            <div className={styles.teamRole}>Secretary</div>
          </div>

          {/* Placeholder 3 */}
          <div className={styles.teamCard}>
            <div className={styles.teamAvatar}>
              <div className={styles.teamAvatarPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <h3>[Name Here]</h3>
            <div className={styles.teamRole}>Treasurer</div>
          </div>
        </div>
      </section>

    </div>
  );
}
