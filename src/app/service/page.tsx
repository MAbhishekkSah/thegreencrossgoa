export default function ServicesPage() {
  const services = [
    { title: "Rescue and Rehabilitation", icon: "⚕️", desc: "Providing immediate medical attention and safe rehabilitation for injured wildlife across Goa." },
    { title: "Awareness programmes", icon: "📢", desc: "Conducting programs to educate the public and local communities on wildlife conservation." },
    { title: "Bird Walk and Nature Trail", icon: "🦜", desc: "Guided tours to appreciate, understand, and document local flora and fauna." },
    { title: "Assisting Students on Thesis", icon: "📚", desc: "Supporting academic research and helping students write thesis on wildlife, nature, flora and fauna." },
    { title: "Training sessions", icon: "🎯", desc: "Specialized training for volunteers and individuals interested in animal rescue techniques." },
    { title: "Raids", icon: "🚨", desc: "Collaborating with authorities to conduct raids against illegal wildlife trade and captivity." },
    { title: "Projects", icon: "🌱", desc: "Undertaking long-term conservation and habitat restoration projects." },
    { title: "Patrolling", icon: "🛡️", desc: "Regular patrolling of sensitive ecological zones to prevent poaching and habitat destruction." },
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-green)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Our Services & Activities</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)' }}>
            Dedicated actions towards a greener, safer environment for Goa's wildlife. Call us for more info: 09822123042 / 08698073818
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container grid-3">
          {services.map((service, index) => (
            <div key={index} className="glass-card" style={{ padding: '2rem', textAlign: 'center', transition: 'transform 0.3s ease', cursor: 'pointer' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--dark-green)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ textAlign: 'center', backgroundColor: 'var(--light-green)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--dark-green)' }}>Need Emergency Rescue?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Our rescue team is available. Do not attempt to handle dangerous wildlife yourself.</p>
          <a href="tel:09822123042" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>Call Rescue Hotline</a>
        </div>
      </section>
    </div>
  );
}
