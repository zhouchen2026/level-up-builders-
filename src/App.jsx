import { ArrowDown, ArrowRight, ArrowUpRight, Menu } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'The Ridge House',
    place: 'Mill Valley, California',
    type: 'Custom home · 4,820 sq ft',
    image: 'photo-1600607687939-ce8a6c25118c',
    alt: 'Warm modern home opening onto a landscaped garden',
  },
  {
    number: '02',
    name: 'Juniper Residence',
    place: 'Oakland, California',
    type: 'Whole-home renovation · 3,150 sq ft',
    image: 'photo-1600210492486-724fe5c67fb0',
    alt: 'Refined living room with natural wood and soft neutral finishes',
  },
  {
    number: '03',
    name: 'Canyon House',
    place: 'Berkeley, California',
    type: 'Addition & renovation · 2,760 sq ft',
    image: 'photo-1600566753086-00f18fb6b3ea',
    alt: 'Sunlit contemporary interior with generous glass doors',
  },
]

function Photo({ id, alt, className = '' }) {
  return (
    <img
      className={className}
      src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=2000&q=85`}
      alt={alt}
      loading="lazy"
    />
  )
}

function App() {
  return (
    <main className="overflow-hidden bg-paper text-ink">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Level Up Builders home">
          <span className="brand-mark">LU<span>+</span></span>
          <span className="brand-name">LEVEL UP <span>BUILDERS</span></span>
        </a>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          <a href="#work">Our work</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Open navigation"><Menu size={22} /></button>
      </header>

      <section id="top" className="hero">
        <Photo id="photo-1600585154340-be6161a56a0c" alt="A modern custom home framed by mature trees" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>Crafted in the Bay Area</span><span>Homes made for the way you live</span></div>
        <div className="hero-copy">
          <p className="eyebrow light">Thoughtful construction. Lasting impact.</p>
          <h1>Build a home<br />that feels like <em>you.</em></h1>
          <a className="round-link" href="#work" aria-label="Explore our work"><ArrowDown size={19} /></a>
        </div>
        <div className="hero-foot"><span>Design-led custom building</span><span>Est. 2014&nbsp; · &nbsp;Northern California</span></div>
      </section>

      <section className="intro section-pad" id="approach">
        <p className="eyebrow">The Level Up difference</p>
        <div className="intro-content">
          <h2>Good building is<br />felt in every detail.</h2>
          <div className="intro-aside">
            <p>We bring clarity, care, and craft to every step of the build. From the first sketch to the final walkthrough, we make the process feel as considered as the home itself.</p>
            <a className="text-link" href="#contact">How we work <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>10<span>+</span></strong><small>Years building better</small></div>
          <div><strong>38</strong><small>Homes brought to life</small></div>
          <div><strong>100<span>%</span></strong><small>Built around you</small></div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected projects</p><h2>Made to belong.</h2></div>
          <a className="text-link" href="#contact">View all projects <ArrowRight size={16} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className="project-image-wrap" href="#contact" aria-label={`Ask us about ${project.name}`}>
                <Photo id={project.image} alt={project.alt} className="project-image" />
                <span className="project-arrow"><ArrowUpRight size={18} /></span>
              </a>
              <div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div>
              <h3>{project.name}</h3>
              <p>{project.place}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <Photo id="photo-1600607687920-4e2a09cf159d" alt="Quiet, light-filled dining space with natural materials" className="statement-image" />
        <div className="statement-overlay" />
        <div className="statement-copy"><p className="eyebrow light">A better build, from the ground up</p><h2>Room to live.<br /><em>Built to last.</em></h2><a className="light-link" href="#contact">Our approach <ArrowRight size={16} /></a></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div><p className="eyebrow">Your next chapter starts here</p><h2>Let's build<br />something <em>lasting.</em></h2></div>
        <div className="contact-right"><p>Have a property, a plan, or just the beginning of an idea? We’d love to hear about it.</p><a className="contact-link" href="mailto:hello@levelupbuilders.com">hello@levelupbuilders.com <ArrowUpRight size={18} /></a><span className="contact-note">Serving the San Francisco Bay Area</span></div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">LU<span>+</span></span><span className="brand-name">LEVEL UP <span>BUILDERS</span></span></a><span>© 2026 Level Up Builders</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
