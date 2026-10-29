import { ArrowDownRight, Mail, MapPin, Phone } from "lucide-react";

const designs = [
  new URL("./assets/design-1.jpg", import.meta.url).href,
  new URL("./assets/design-2.jpg", import.meta.url).href,
  new URL("./assets/design-3.jpg", import.meta.url).href,
  new URL("./assets/design-4.jpg", import.meta.url).href,
  new URL("./assets/design-5.jpg", import.meta.url).href,
  new URL("./assets/design-6.jpg", import.meta.url).href,
  new URL("./assets/design-7.jpg", import.meta.url).href,
  new URL("./assets/design-8.jpg", import.meta.url).href,
  new URL("./assets/design-9.jpg", import.meta.url).href,
  new URL("./assets/design-10.jpg", import.meta.url).href,
  new URL("./assets/design-11.jpg", import.meta.url).href,
  new URL("./assets/design-12.jpg", import.meta.url).href,
  new URL("./assets/design-13.jpg", import.meta.url).href,
  new URL("./assets/design-14.jpg", import.meta.url).href,
  new URL("./assets/design-15.jpg", import.meta.url).href,
  new URL("./assets/design-17.jpg", import.meta.url).href,
];

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Paing's Oasis Home">
        <span className="wordmark-name">Paing’s Oasis</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-topline">
        <span>
          <span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS
        </span>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">HELLO THERE, I’M Min Sett Paing✳</p>
          <h1>
            Welcome
            <br />
            to
            <br />
            <em>Paing's Oasis</em>
          </h1>
          <p className="hero-description">
            I am a Myanmar traditional Achaik designer who loves preserving and
            sharing Myanmar’s cultural beauty through art and design.
          </p>
          <a className="round-link" href="#about">
            <span>GET TO KNOW ME</span>
            <span className="round-link-icon">
              <ArrowDownRight size={20} />
            </span>
          </a>
        </div>

        <div className="artwork" aria-label="Abstract colourful artwork">
          <div className="artwork-label label-top">
            A LITTLE BIT OF
            <br />
            COLOUR & CURIOSITY
          </div>

          <div className="artwork-label label-bottom">
            DESIGNED WITH
            <br />
            FEELING, ALWAYS.
          </div>
          <span className="artwork-number">01 / 01</span>
        </div>
      </div>

      <div className="hero-bottomline">
        <span>Professional Achaik Designer Since 2022</span>
        <span className="scroll-note">
          SCROLL A LITTLE <span>↓</span>
        </span>
        <span>GOOD THINGS TAKE SHAPE</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-kicker">
        <span>01</span> A LITTLE ABOUT ME
      </div>
      <div className="about-content">
        <img
          className="about-portrait"
          src={new URL("./assets/profile.jpg", import.meta.url).href}
          alt="Min Sett Paing working at a traditional weaving loom"
          loading="lazy"
        />

        <div className="about-copy">
          <p>
            My work focuses on creating traditional Kanote patterns and Achaik
            fabric designs inspired by Myanmar’s culture. I use beautiful
            curves, flowing lines, and detailed patterns to bring traditional
            Myanmar art into modern designs.
          </p>

          <p>
            Through my designs, I hope to share the beauty of Myanmar’s
            traditional art with more people and keep our cultural heritage
            alive for future generations.
          </p>
          <div className="contact-info" aria-label="Contact information">
            <a className="contact-info-item" href="mailto:paingk38@gmail.com">
              <span className="contact-info-icon">
                <Mail size={17} strokeWidth={1.7} />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">EMAIL</span>
                <span className="contact-info-value">paingk38@gmail.com</span>
              </span>
            </a>
            <a className="contact-info-item" href="tel:+959250250250">
              <span className="contact-info-icon">
                <Phone size={17} strokeWidth={1.7} />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">PHONE</span>
                <span className="contact-info-value">+95 9 962 133 368</span>
              </span>
            </a>
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <MapPin size={17} strokeWidth={1.7} />
              </span>
              <span className="contact-info-text">
                <span className="contact-info-label">LOCATION</span>
                <span className="contact-info-value">
                  ရက်ကန်းတော်ရပ် | အိုးတော်ရပ်ကွက် | အမရပူရမြို့
                </span>
              </span>
            </div>
          </div>
          <div className="interest-tags">
            <span>ARCHITECTURAL STUDENT</span>
            <span>TRADITIONAL ACHAIC DESIGNER</span>
          </div>
        </div>
      </div>
      <div className="about-stamp" aria-hidden="true">
        MADE WITH
        <br />
        <span>♥</span>
        <br />
        INTENTION
      </div>
    </section>
  );
}

function DesignDisplay() {
  return (
    <section className="design-section" aria-labelledby="design-heading">
      <div className="section-kicker">
        <span>02</span> A FEW THINGS I’VE MADE
      </div>
      <div className="design-heading">
        <h2 id="design-heading">Design display</h2>
        <p>A collection of patterns, colours, and ideas.</p>
      </div>
      <div className="design-gallery">
        {designs.map((design, index) => (
          <figure className="design-card" key={design}>
            <img
              src={design}
              alt={`Design piece ${String(index + 1).padStart(2, "0")}`}
              loading="lazy"
            />
            <figcaption>
              DESIGN / {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Min Sett Paing</span>
      <a href="#home" className="back-to-top">
        BACK TO TOP ↑
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <Hero />
        <About />
        <DesignDisplay />
        {/* <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}
