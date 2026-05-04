import "./contact.css";

export const metadata = {
  title: 'Contact Us | The Green Cross Goa',
  description: 'Get in touch with The Green Cross Goa for rescue requests or inquiries.',
};

export default function Contact() {
  return (
    <div className="contact-page animate-fade-in">
      <section className="page-header glass">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out to us for wildlife emergencies or general inquiries.</p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="contact-container">
          <div className="contact-info glass">
            <h2>Get In Touch</h2>
            <p>If you see an injured or distressed animal, please contact us immediately.</p>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Our Location</h4>
                <p>Mapusa, Goa, India</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>info@greencrossgoa.org</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container glass">
            <h2>Send a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
