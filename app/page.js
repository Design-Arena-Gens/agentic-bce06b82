'use client';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.5em;
          margin: 0 0 20px 0;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.3em;
          margin: 0 0 30px 0;
          opacity: 0.95;
        }

        .btn {
          background: white;
          color: #667eea;
          padding: 15px 40px;
          border: none;
          border-radius: 30px;
          font-size: 1.1em;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s;
          text-decoration: none;
          display: inline-block;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        .section {
          padding: 80px 20px;
        }

        .section h2 {
          text-align: center;
          font-size: 2.5em;
          margin-bottom: 50px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }

        .service-icon {
          font-size: 3em;
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-size: 1.5em;
          margin-bottom: 15px;
          color: #667eea;
        }

        .service-card p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .price {
          font-size: 1.3em;
          font-weight: 700;
          color: #764ba2;
        }

        .about {
          background: #f8f9fa;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          line-height: 1.8;
          color: #555;
          font-size: 1.1em;
        }

        .contact {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .contact h2 {
          color: white;
        }

        .contact-info {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-item {
          margin: 25px 0;
          font-size: 1.2em;
        }

        .contact-item strong {
          display: block;
          margin-bottom: 5px;
          font-size: 1.1em;
        }

        .hours {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          margin-top: 40px;
        }

        .hours h3 {
          margin-top: 0;
          font-size: 1.5em;
        }

        .hours-list {
          list-style: none;
          padding: 0;
          font-size: 1.1em;
        }

        .hours-list li {
          padding: 8px 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .hours-list li:last-child {
          border-bottom: none;
        }

        .footer {
          background: #2d3748;
          color: white;
          text-align: center;
          padding: 30px 20px;
        }
      `}</style>

      <div className="hero">
        <div className="container">
          <h1>Elite Cuts</h1>
          <p>Where Style Meets Perfection</p>
          <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Book Appointment
          </button>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Men's Haircut</h3>
              <p>Classic and modern cuts tailored to your style. Includes consultation and styling.</p>
              <div className="price">$35</div>
            </div>

            <div className="service-card">
              <div className="service-icon">💇</div>
              <h3>Women's Haircut</h3>
              <p>Expert styling for all hair types. Wash, cut, and blow dry included.</p>
              <div className="price">$55</div>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Hair Coloring</h3>
              <p>Full color services, highlights, balayage, and color correction.</p>
              <div className="price">From $85</div>
            </div>

            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Beard Trim</h3>
              <p>Precision beard shaping and grooming for the modern gentleman.</p>
              <div className="price">$20</div>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Special Styling</h3>
              <p>For weddings, events, and special occasions. Make your day unforgettable.</p>
              <div className="price">From $75</div>
            </div>

            <div className="service-card">
              <div className="service-icon">👶</div>
              <h3>Kids Haircut</h3>
              <p>Fun and friendly cuts for children. Patient stylists, quick service.</p>
              <div className="price">$25</div>
            </div>
          </div>
        </div>
      </div>

      <div className="section about">
        <div className="container">
          <h2>About Elite Cuts</h2>
          <div className="about-content">
            <p>
              With over 15 years of experience, Elite Cuts has been the premier destination for
              hair styling excellence. Our team of award-winning stylists stays current with the
              latest trends and techniques to bring you exceptional service every time.
            </p>
            <p style={{ marginTop: '20px' }}>
              We use only premium products and provide personalized consultations to ensure
              you leave feeling confident and looking your absolute best. Your satisfaction
              is our priority.
            </p>
          </div>
        </div>
      </div>

      <div className="section contact" id="contact">
        <div className="container">
          <h2>Visit Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <strong>📍 Location</strong>
              123 Style Street, Downtown District
            </div>
            <div className="contact-item">
              <strong>📞 Phone</strong>
              (555) 123-4567
            </div>
            <div className="contact-item">
              <strong>✉️ Email</strong>
              info@elitecuts.com
            </div>

            <div className="hours">
              <h3>Business Hours</h3>
              <ul className="hours-list">
                <li><span>Monday - Friday</span><span>9:00 AM - 7:00 PM</span></li>
                <li><span>Saturday</span><span>9:00 AM - 6:00 PM</span></li>
                <li><span>Sunday</span><span>10:00 AM - 5:00 PM</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Elite Cuts. All rights reserved.</p>
      </div>
    </div>
  );
}
