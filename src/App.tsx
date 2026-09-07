import { personal, sections } from './content';

const visibleSections = sections.filter((section) => section.entries.length > 0);

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header" id="top">
        <h1>{personal.name}</h1>
        <nav aria-label="On this page">
          {visibleSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>{section.navLabel}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="about" id="about" aria-label="About Ayush">
          <img className="portrait" src="/profile.jpg" width="126" height="154" alt="Ayush Alag" fetchPriority="high" />
          <p>Hi! I've worked on compound agents at Mithril and trading signals at Five Rings, and studied computer science at Stanford and Princeton.</p>
          <p>At Princeton, I spent 50% of my time taking graduate AI classes and 50% on three dance teams. In New York, I enjoyed trying every Indian restaurant. I peaked in high school by working on a genomic test for allergies and starting <a href={personal.allergezy}>a company</a>.</p>
          <p>I enjoy thinking in systems and incentives, and am broadly interested in algorithmic design, societal development, and the intersection of technology and human behavior. In my free time, I enjoy writing and philosophizing.</p>
          <p>I also angel invest in a handful of startups, and am always excited to chat with founders.</p>
          <div className="contact-links" aria-label="Contact and profiles">
            <a href={`mailto:${personal.email}`}>Email</a>
            <a href={personal.github}>GitHub</a>
            <a href={personal.x}>Twitter</a>
            <a href={personal.linkedin}>LinkedIn</a>
          </div>
        </section>

        {visibleSections.map((section) => (
          <section className="content-section" id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <ul>
              {section.entries.map((entry) => (
                <li key={entry.href}>
                  <a href={entry.href}>{entry.title}</a>
                  {entry.meta && <span className="entry-meta"> ({entry.meta})</span>}
                  {entry.description && <p>{entry.description}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
