export default function AboutPage() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Section for About */}
      <section className="section-padding" style={{ backgroundColor: 'var(--dark-green)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>About The Green Cross Goa</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            One of the Goa's oldest Rescue, Release, Rehabilitation, Conservation, Awareness programs and Training session Centre.
          </p>
        </div>
      </section>

      {/* Aims and Objectives */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--dark-green)' }}>Our Aims and Objectives</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                <li style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-orange)', fontWeight: 'bold' }}>✓</span>
                  To Sensitize public about wildlife conservation through involvement of students.
                </li>
                <li style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-orange)', fontWeight: 'bold' }}>✓</span>
                  To build up network of volunteers in various parts of state.
                </li>
                <li style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-orange)', fontWeight: 'bold' }}>✓</span>
                  To identify potential resource person existing among students.
                </li>
                <li style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-orange)', fontWeight: 'bold' }}>✓</span>
                  To highlight importance of wildlife conservation among stakeholders.
                </li>
              </ul>
            </div>
            <div>
               {/* Image Placeholder */}
               <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img src="/img/hero_bg.png" alt="Wildlife Conservation in Goa" style={{ width: '100%', display: 'block' }} />
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="section-padding" style={{ backgroundColor: 'var(--light-green)' }}>
        <div className="container section-title">
          <h2>Our Impact</h2>
          <p>Decades of dedication to Goa's wildlife has led to measurable change.</p>
        </div>
        <div className="container grid-4" style={{ textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--dark-green)', fontFamily: 'var(--font-heading)' }}>17,897</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Total Animal Rescue</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--dark-green)', fontFamily: 'var(--font-heading)' }}>14,892</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Awareness Programmes</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--dark-green)', fontFamily: 'var(--font-heading)' }}>114</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Total Membership</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--dark-green)', fontFamily: 'var(--font-heading)' }}>17,623</div>
            <div style={{ fontSize: '1.1rem', fontWeight: 500 }}>Save Wild Life</div>
          </div>
        </div>
      </section>
    </div>
  );
}
