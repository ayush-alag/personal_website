import { ArrowUpRight } from 'lucide-react';
import { personal, sections } from './content';

const visibleSections = sections.filter((section) => section.entries.length > 0);

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ayush Alag, back to top">a<span className="wordmark-slash">/</span>a<span className="signal" aria-hidden="true" /></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          {visibleSections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.navLabel}</a>)}
          <a href={`mailto:${personal.email}`}>Say hello <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      </header>

      <main id="top">
        <section className="intro" aria-labelledby="name">
          <div className="intro-copy">
            <p className="eyebrow">Hi, I'm</p>
            <h1 id="name">{personal.name}<span className="name-period">.</span></h1>
            <p className="intro-line">Thinking in systems.<br />Interested in <em>people.</em></p>
          </div>
          <figure className="portrait">
            <img src="/profile.jpg" width="144" height="174" alt="Ayush by the water" fetchPriority="high" />
            <figcaption>occasionally outside ↗</figcaption>
          </figure>
        </section>

        <section className="section-grid about" id="about" aria-labelledby="about-title">
          <h2 className="section-label" id="about-title"><span className="section-number">01 /</span> A little context</h2>
          <div className="prose">
            <p>I've worked on compound agents at Mithril and trading signals at Five Rings, and studied computer science at Stanford and Princeton. I'm drawn to AI, algorithmic design, and how incentives shape the world.</p>
            <p>At Princeton, I split my time between graduate AI classes and three dance teams. In New York, I tried to eat at every Indian restaurant. I still make time for writing and philosophizing.</p>
            <p>I also angel invest in a handful of startups. Always happy to talk with people building something interesting.</p>
          </div>
        </section>

        {visibleSections.map((section, index) => (
          <section className="section-grid" id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
            <h2 className="section-label" id={`${section.id}-title`}><span className="section-number">{String(index + 2).padStart(2, '0')} /</span>{section.title}</h2>
            <ul className="entry-list">
              {section.entries.map((entry) => (
                <li key={entry.href}>
                  <a className="entry-link" href={entry.href} target="_blank" rel="noreferrer">
                    <div className="entry-heading"><h3>{entry.title}</h3><ArrowUpRight className="entry-arrow" aria-hidden="true" /></div>
                    <p className="entry-description">{entry.description}</p>
                    <span className="entry-meta">{entry.meta}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <a className="hello-link" href={`mailto:${personal.email}`}>Good conversations welcome. <span className="hello-arrow"><ArrowUpRight aria-hidden="true" /></span></a>
        <div className="social-links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          <a href={personal.x} target="_blank" rel="noreferrer">X <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
