import './about_E_CELL.css';
import ecellLogo from './assets/ecell-logo.png';

const About_E_CELL = () => {
  return (
    <>
      {/* HERO SECTION - Top Most Part */}
      <section className="hero-section">
        {/* Enhanced Tech Background */}
        <div className="hero-background">
          {/* Animated Grid */}
          <div className="hero-grid"></div>
          
          {/* Gradient Orbs */}
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          
          {/* Tech Rings */}
          <div className="tech-ring ring-1"></div>
          <div className="tech-ring ring-2"></div>
          
          {/* Floating Tech Elements */}
          <div className="hero-float-element square"></div>
          <div className="hero-float-element circle"></div>
          <div className="hero-float-element rect"></div>
          
          {/* Circuit Patterns */}
          <svg className="hero-circuit-svg" viewBox="0 0 1200 800">
            <path d="M50,50 L150,50 L150,150 L250,150 L250,250" stroke="url(#hero-circuit)" strokeWidth="3" fill="none" className="hero-circuit-path" />
            <path d="M1150,750 L1050,750 L1050,650 L950,650 L950,550" stroke="url(#hero-circuit)" strokeWidth="3" fill="none" className="hero-circuit-path path-delay" />
            <circle cx="150" cy="150" r="8" fill="hsl(187, 100%, 55%)" className="circuit-dot" />
            <circle cx="1050" cy="650" r="8" fill="hsl(200, 100%, 60%)" className="circuit-dot dot-delay" />
            <defs>
              <linearGradient id="hero-circuit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(187, 100%, 55%)" />
                <stop offset="50%" stopColor="hsl(200, 100%, 60%)" />
                <stop offset="100%" stopColor="hsl(187, 100%, 55%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hero-container">
          <div className="hero-content-wrapper">
            {/* Logo Section with ABOUT E-CELL Header */}
            <div className="hero-logo-section">
              {/* ABOUT E-CELL Badge */}
              <div className="about-badge">
                <div className="badge-dot"></div>
                <span className="badge-title">ABOUT E-CELL</span>
                <div className="badge-dot badge-dot-delay"></div>
              </div>
              
              {/* Logo */}
              <div className="logo-wrapper">
                <div className="logo-glow"></div>
                <img
                  src={ecellLogo}
                  alt="E-Cell NIT Raipur Logo"
                  className="ecell-logo"
                />
              </div>
            </div>

            {/* Content */}
            <div className="hero-text-content">
              <div className="cdc-badge">
                <span className="cdc-dot"></span>
                Part of Career Development Cell
              </div>

              <h1 className="hero-main-heading">
                <span className="heading-line">THE</span>
                <span className="heading-line gradient-heading">ENTREPRENEURSHIP</span>
                <span className="heading-line">CELL</span>
                <span className="heading-line hero-subheading">NIT RAIPUR</span>
              </h1>

              <p className="hero-tagline">
                <span className="tagline-bold">FOSTERING INNOVATION</span> • <span className="tagline-bold">NURTURING ENTREPRENEURS</span> • <span className="tagline-bold">BUILDING LEADERS</span>
              </p>
              
              <p className="hero-description">
                Empowering the next generation of business leaders at the National Institute of Technology, Raipur.
              </p>

              <div className="hero-buttons">
                <a href="#about" className="hero-btn hero-btn-primary">
                  <span>Learn More</span>
                  <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#events" className="hero-btn hero-btn-secondary">
                  <span>Our Events</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-box">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Rest of the content */}
      <section id="about" className="about-ecell-section">
        {/* Tech Background Effects */}
        <div className="tech-background">
        {/* Animated Grid Pattern */}
        <div className="grid-pattern"></div>
        
        {/* Floating Tech Elements */}
        <div className="floating-element circle-1"></div>
        <div className="floating-element square-1"></div>
        <div className="floating-element rect-1"></div>
        <div className="floating-element circle-2"></div>
        
        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        
        {/* Circuit Lines */}
        <svg className="circuit-svg" viewBox="0 0 1000 1000">
          <path d="M100,100 L200,100 L200,200 L300,200" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="circuit-path path-1" />
          <path d="M800,800 L700,800 L700,700 L600,700" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="circuit-path path-2" />
          <path d="M100,800 L200,800 L200,700 L300,700" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="circuit-path path-3" />
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(187, 100%, 55%)" />
              <stop offset="100%" stopColor="hsl(200, 100%, 60%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        {/* Main Introduction */}
        <div className="intro-section">
          <div className="hero-card">
            <div className="decorative-blob blob-1"></div>
            <div className="decorative-blob blob-2"></div>
            
            <div className="hero-content">
              {/* Main Tagline */}
              <div className="tagline-section">
                <div className="badge">
                  <span className="pulse-dot"></span>
                  <span className="badge-text">STUDENT-RUN • NON-PROFIT • SINCE 2010</span>
                  <span className="pulse-dot pulse-delay"></span>
                </div>
                
                <h3 className="main-heading">
                  Converting <span className="gradient-text">Dreamers</span>
                  <br />
                  Into <span className="gradient-text">Doers</span>
                </h3>
                
                <p className="subtitle">
                  A self-driven community under sagacious guidance, building the entrepreneurial future of India
                </p>
              </div>

              {/* Key Description Cards */}
              <div className="description-cards">
                {/* Card 1 */}
                <div className="desc-card">
                  <div className="card-overlay"></div>
                  <div className="card-inner">
                    <div className="icon-box icon-primary">
                      <span className="emoji">🚀</span>
                    </div>
                    <div>
                      <h4 className="card-title">Our Beginning</h4>
                      <p className="card-text">
                        After a humble beginning in <span className="highlight-primary">2010</span>, we've expanded our networks across India, establishing links with angel investors, organizations, and accomplished entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="desc-card">
                  <div className="card-overlay"></div>
                  <div className="card-inner">
                    <div className="icon-box icon-accent">
                      <span className="emoji">🎯</span>
                    </div>
                    <div>
                      <h4 className="card-title">E-Summit Excellence</h4>
                      <p className="card-text">
                        Our flagship <span className="highlight-accent">E-Summit</span> brings speakers from diverse backgrounds, providing platforms for startups to access seed funding and mentorship.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="desc-card">
                  <div className="card-overlay"></div>
                  <div className="card-inner">
                    <div className="icon-box icon-secondary">
                      <span className="emoji">💡</span>
                    </div>
                    <div>
                      <h4 className="card-title">Breaking Barriers</h4>
                      <p className="card-text">
                        We help youth break prejudices associated with entrepreneurship through fresh ideas, mentorship programs, and workshops by industry pioneers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="desc-card">
                  <div className="card-overlay"></div>
                  <div className="card-inner">
                    <div className="icon-box icon-primary">
                      <span className="emoji">🤝</span>
                    </div>
                    <div>
                      <h4 className="card-title">Resources & Support</h4>
                      <p className="card-text">
                        Access to seed funding, mentorship programs, interactive speaker sessions, and workshops that transform ideas into sustainable ventures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="stats-grid">
                <div className="stat-card stat-primary">
                  <div className="stat-overlay"></div>
                  <div className="stat-content">
                    <div className="stat-icon">📅</div>
                    <div className="stat-number">2010</div>
                    <div className="stat-label">ESTABLISHED</div>
                  </div>
                </div>
                
                <div className="stat-card stat-accent">
                  <div className="stat-overlay"></div>
                  <div className="stat-content">
                    <div className="stat-icon">🌍</div>
                    <div className="stat-number">PAN INDIA</div>
                    <div className="stat-label">NETWORK</div>
                  </div>
                </div>
                
                <div className="stat-card stat-secondary">
                  <div className="stat-overlay"></div>
                  <div className="stat-content">
                    <div className="stat-icon">🎪</div>
                    <div className="stat-number">E-SUMMIT</div>
                    <div className="stat-label">FLAGSHIP EVENT</div>
                  </div>
                </div>
                
                <div className="stat-card stat-primary">
                  <div className="stat-overlay"></div>
                  <div className="stat-content">
                    <div className="stat-icon">💰</div>
                    <div className="stat-number">SEED FUNDING</div>
                    <div className="stat-label">QUICK ACCESS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="quote-section">
            <div className="quote-card">
              <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="quote-text">
                "We are a bunch of self-driven folks who strive hard to convert dreamers into doers"
              </p>
              <div className="quote-footer">
                <div className="quote-line"></div>
                <span className="quote-author">E-CELL NIT RAIPUR</span>
                <div className="quote-line"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="journey-section">
          <div className="section-header">
            <h3 className="section-title">
              <span className="title-highlight">OUR</span> JOURNEY
            </h3>
            <p className="section-subtitle">From humble beginnings to a powerhouse of innovation</p>
          </div>

          <div className="journey-content">
            {/* Image Section */}
            <div className="journey-image">
              <div className="image-glow"></div>
              <div className="image-wrapper">
                <img
                  src="./assets/ecell-team.jpeg"
                  alt="E-Cell Team NIT Raipur"
                  className="team-image"
                />
                <div className="image-overlay"></div>
                <div className="image-caption">
                  <div className="caption-header">
                    <div className="caption-icon">
                      <span>🚀</span>
                    </div>
                    <div>
                      <p className="caption-title">E-Cell Team</p>
                      <p className="caption-subtitle">NIT Raipur</p>
                    </div>
                  </div>
                  <div className="caption-tags">
                    <span className="tag">INNOVATORS</span>
                    <span className="tag">LEADERS</span>
                    <span className="tag">DOERS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="journey-timeline">
              {/* Timeline Item 1 */}
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-circle marker-primary">
                    <span className="marker-number">1</span>
                  </div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-card">
                    <h4 className="timeline-title">Visionary Initiative</h4>
                    <p className="timeline-text">
                      Established under the <span className="highlight-primary">Career Development Cell (CDC)</span> at NIT Raipur, recognizing the growing need for entrepreneurial mindset among engineering students.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-circle marker-accent">
                    <span className="marker-number">2</span>
                  </div>
                  <div className="marker-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-card">
                    <h4 className="timeline-title">Network Expansion</h4>
                    <p className="timeline-text">
                      Successfully expanded networks across <span className="highlight-accent">Chhattisgarh and India</span>, establishing links with organizations, angel investors, and accomplished entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-circle marker-secondary">
                    <span className="marker-number">3</span>
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-card">
                    <h4 className="timeline-title">Powerhouse of Innovation</h4>
                    <p className="timeline-text">
                      Under <span className="highlight-secondary">Dr. Samir Bajpai's</span> guidance, evolved into an innovation hub where students transform ideas into viable business ventures.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="quick-stat stat-primary-bg">
                  <div className="quick-stat-number">SEED</div>
                  <div className="quick-stat-label">FUNDING ACCESS</div>
                </div>
                <div className="quick-stat stat-accent-bg">
                  <div className="quick-stat-number">MENTOR</div>
                  <div className="quick-stat-label">PROGRAMS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision and Aim Section */}
        <div className="vision-section">
          <div className="section-header">
            <h3 className="section-title">
              VISION & <span className="gradient-text">AIM</span>
            </h3>
            <p className="section-subtitle">
              Leaders Beyond Borders - Nurturing innovative ideas and building a perennial startup culture
            </p>
          </div>
          
          <div className="vision-cards">
            {/* Vision Card */}
            <div className="animated-gradient-card">
              <div className="gradient-card-content">
                <div className="card-header">
                  <div className="header-icon icon-primary">
                    <span>🎯</span>
                  </div>
                  <h4 className="card-heading">VISION</h4>
                </div>
                
                <div className="card-body">
                  <p>
                    Striding forward carrying the motto of <span className="highlight-primary">'Leaders Beyond Borders'</span>, we at the Entrepreneurship Cell, NIT Raipur, aim to give a milieu to nurture innovative ideas.
                  </p>
                  <p>
                    E-Summit'24 would be a perfect conglomerate - notion of Entrepreneurship, Management and Quizzing to bring out the innovator within oneself.
                  </p>
                  <p>
                    E-Summit provides a platform for aspiring entrepreneurs to interact with some of the alpha geeks in the forte and budding entrepreneurs acquainted with the assets and liabilities in this field so that their actions don't go futile.
                  </p>
                </div>
                
                <div className="card-footer">
                  <p className="footer-text">LEADERS BEYOND BORDERS</p>
                </div>
              </div>
            </div>

            {/* Aim Card */}
            <div className="animated-gradient-card">
              <div className="gradient-card-content">
                <div className="card-header">
                  <div className="header-icon icon-accent">
                    <span>🚀</span>
                  </div>
                  <h4 className="card-heading">AIM</h4>
                </div>
                
                <div className="card-body">
                  <p>
                    We would ensure that the ideas don't just thrive but become the greatest revelations of the country.
                  </p>
                  <p>
                    E-Summit'24 will aim at laying a <span className="highlight-accent">foundation stone for developing a perennial start-up culture</span> that would surely inspire society to grow and progress.
                  </p>
                  <p>
                    We provide the required guidance and get the budding entrepreneurs acquainted with the assets and liabilities in this field, ensuring their actions lead to meaningful impact.
                  </p>
                </div>
                
                <div className="card-footer">
                  <p className="footer-text">PERENNIAL STARTUP CULTURE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="main-timeline-section">
          <div className="section-header">
            <h3 className="section-title">
              OUR <span className="gradient-text">TIMELINE</span>
            </h3>
            <p className="section-subtitle">
              A journey of innovation, growth, and entrepreneurial excellence since 2010
            </p>
          </div>

          <div className="timeline-wrapper">
            {/* Vertical Timeline Line */}
            <div className="timeline-line"></div>

            <div className="timeline-items">
              {/* 2010 */}
              <div className="main-timeline-item timeline-left">
                <div className="timeline-node">
                  <div className="node-circle node-primary">
                    <span className="node-icon">🌱</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-primary">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-primary">
                        <span className="badge-dot"></span>
                        2010
                      </div>
                      <h4 className="timeline-card-title">The Beginning</h4>
                      <p className="timeline-card-text">
                        E-Cell NIT Raipur was established under the Career Development Cell, marking the start of our entrepreneurial journey. A small team with big dreams began nurturing the startup culture.
                      </p>
                      <div className="decorative-line line-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2015 */}
              <div className="main-timeline-item timeline-right">
                <div className="timeline-node">
                  <div className="node-circle node-accent">
                    <span className="node-icon">🎪</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-accent">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-accent">
                        <span className="badge-dot"></span>
                        2015
                      </div>
                      <h4 className="timeline-card-title">First E-Summit</h4>
                      <p className="timeline-card-text">
                        Launched our flagship event E-Summit, bringing together entrepreneurs, investors, and students. The event became a catalyst for startup culture in Central India.
                      </p>
                      <div className="decorative-line line-accent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="main-timeline-item timeline-left">
                <div className="timeline-node">
                  <div className="node-circle node-secondary">
                    <span className="node-icon">🌍</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-secondary">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-secondary">
                        <span className="badge-dot"></span>
                        2018
                      </div>
                      <h4 className="timeline-card-title">Network Expansion</h4>
                      <p className="timeline-card-text">
                        Successfully expanded our network across India, establishing partnerships with angel investors, VCs, and accomplished entrepreneurs. Our reach extended beyond Chhattisgarh.
                      </p>
                      <div className="decorative-line line-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="main-timeline-item timeline-right">
                <div className="timeline-node">
                  <div className="node-circle node-primary">
                    <span className="node-icon">💻</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-primary">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-primary">
                        <span className="badge-dot"></span>
                        2020
                      </div>
                      <h4 className="timeline-card-title">Digital Transformation</h4>
                      <p className="timeline-card-text">
                        Adapted to the new normal by taking our events and mentorship programs online, reaching a wider audience and maintaining our commitment to entrepreneurship during challenging times.
                      </p>
                      <div className="decorative-line line-primary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div className="main-timeline-item timeline-left">
                <div className="timeline-node">
                  <div className="node-circle node-accent">
                    <span className="node-icon">🏢</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-accent">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-accent">
                        <span className="badge-dot"></span>
                        2023
                      </div>
                      <h4 className="timeline-card-title">Incubation Center</h4>
                      <p className="timeline-card-text">
                        Established state-of-the-art incubation facilities with co-working spaces, mentorship programs, and seed funding opportunities. 10+ startups incubated with ₹50L+ funding raised.
                      </p>
                      <div className="decorative-line line-accent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="main-timeline-item timeline-right">
                <div className="timeline-node">
                  <div className="node-circle node-secondary">
                    <span className="node-icon">🚀</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-secondary">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-secondary">
                        <span className="badge-dot"></span>
                        2024
                      </div>
                      <h4 className="timeline-card-title">E-Summit Excellence</h4>
                      <p className="timeline-card-text">
                        Organized the largest E-Summit in NIT Raipur history with 1500+ participants, 50+ speakers from unicorn startups, and ₹10L+ prize pool. A landmark achievement in our journey.
                      </p>
                      <div className="decorative-line line-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2025 */}
              <div className="main-timeline-item timeline-left">
                <div className="timeline-node">
                  <div className="node-circle node-primary">
                    <span className="node-icon">⭐</span>
                  </div>
                  <div className="node-glow"></div>
                </div>
                <div className="timeline-card-wrapper">
                  <div className="main-timeline-card card-primary">
                    <div className="card-gradient-overlay"></div>
                    <div className="card-content-inner">
                      <div className="year-badge badge-primary">
                        <span className="badge-dot"></span>
                        2025
                      </div>
                      <h4 className="timeline-card-title">Future Forward</h4>
                      <p className="timeline-card-text">
                        Continuing our mission of 'Leaders Beyond Borders', expanding our incubation programs, and building a perennial startup culture that inspires the next generation of entrepreneurs.
                      </p>
                      <div className="decorative-line line-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline End Marker */}
            <div className="timeline-end">
              <div className="end-marker">
                <span className="end-icon">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h3 className="cta-title">
            JOIN THE <span className="gradient-text">ENTREPRENEURIAL REVOLUTION</span>
          </h3>
          <p className="cta-text">
            Be part of NIT Raipur's thriving startup ecosystem. Transform your ideas into reality with our support, mentorship, and resources.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">GET INVOLVED</button>
            <button className="btn btn-secondary">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About_E_CELL;
