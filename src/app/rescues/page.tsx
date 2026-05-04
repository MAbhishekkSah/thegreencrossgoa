export default function RescuesPage() {
  const animals = [
    { name: "King Cobra", img: "/img/king_cobra.png" },
    { name: "Porcupine", img: "/img/porcupine.png" },
    { name: "Indian Spectacled Cobra", img: "/img/hero_bg.png" }, // Using placeholder until real image is added
    { name: "Pangolin", img: "/img/hero_bg.png" }, // Using placeholder
    { name: "Bison", img: "/img/hero_bg.png" }, // Using placeholder
    { name: "Crocodile", img: "/img/hero_bg.png" }, // Using placeholder
    { name: "Sand Boa", img: "/img/hero_bg.png" }, // Using placeholder
  ];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Header */}
      <section className="section-padding" style={{ backgroundColor: 'var(--dark-green)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Some Of Our Rescues</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
            Meet the incredible wildlife we have had the honor of rescuing and protecting in Goa.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container grid-3">
          {animals.map((animal, index) => (
            <div key={index} style={{ 
              borderRadius: 'var(--radius-md)', 
              overflow: 'hidden', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              backgroundColor: 'white',
              transition: 'transform 0.3s ease'
            }}>
              {/* Replace placeholder with actual images placed in public/img/ */}
              <div style={{ height: '300px', width: '100%', backgroundColor: '#eee', position: 'relative' }}>
                <img src={animal.img} alt={animal.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ margin: 0, color: 'var(--dark-green)', fontSize: '1.25rem' }}>{animal.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Support CTA */}
      <section className="section-padding" style={{ textAlign: 'center', backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--accent-gold)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Help Us Save More Lives</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Donate to protect endangered species and preserve natural habitats for future generations.
            </p>
            <a href="#donate" className="btn btn-accent" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Donate Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
