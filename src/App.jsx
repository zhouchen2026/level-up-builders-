import { ArrowDown, ArrowRight, ArrowUpRight, Menu } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Contemporary Townhome',
    place: 'Clean lines · Thoughtful details',
    type: 'Custom home',
    image: '/images/projects/project-01.jpg',
    alt: 'Modern white townhome with large windows and a landscaped entry',
  },
  {
    number: '02',
    name: 'A Home for Gathering',
    place: 'Open kitchen · Light-filled living',
    type: 'Townhome',
    image: '/images/projects/project-02.jpg',
    alt: 'Bright living room with pale furnishings and large windows',
  },
  {
    number: '03',
    name: 'Warm Modern Residence',
    place: 'Natural light · Modern materials',
    type: 'New construction',
    image: '/images/projects/project-03.jpg',
    alt: 'Light-sided modern home with dark trim and a landscaped entry',
  },
]

function Photo({ src, alt, className = '' }) {
  return (
    <img
      className={className}
      src={src}
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
          <a href="#company">Our company</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Start a project <ArrowUpRight size={15} /></a>
        <button className="menu-button" aria-label="Open navigation"><Menu size={22} /></button>
      </header>

      <section id="top" className="hero">
        <Photo src="/images/projects/cover.jpg" alt="Warm contemporary kitchen with light oak cabinetry and a marble island" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>Custom homes · Thoughtful renovations</span><span>Homes made for the way you live</span></div>
        <div className="hero-copy">
          <p className="eyebrow light">Thoughtful construction. Lasting impact.</p>
          <h1>Build a home<br />that feels like <em>you.</em></h1>
          <a className="round-link" href="#work" aria-label="Explore our work"><ArrowDown size={19} /></a>
        </div>
        <div className="hero-foot"><span>Design-led custom building</span><span>Level Up Builders</span></div>
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
      </section>

      <section className="company-story section-pad" id="company">
        <p className="eyebrow">Our company</p>
        <div className="intro-content">
          <h2>Built around<br />what matters.</h2>
          <div className="intro-aside">
            <p>At Level Up Builders, we believe a home should feel considered from the first conversation to the final detail. We bring people, plans, and craftsmanship together to create spaces that feel personal, work beautifully, and are made to last.</p>
            <p>We listen closely, communicate clearly, and take pride in the care behind every decision. The result is a building experience shaped around your priorities—and a home ready for the life you want to live.</p>
          </div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected projects</p><h2>Made to belong.</h2></div>
          <a className="text-link" href="#contact">Start a project <ArrowRight size={16} /></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} className="project-image" loading="lazy" />
              </div>
              <div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div>
              <h3>{project.name}</h3>
              <p>{project.place}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <Photo src="/images/projects/project-02.jpg" alt="Bright, welcoming living space" className="statement-image" />
        <div className="statement-overlay" />
        <div className="statement-copy"><p className="eyebrow light">A better build, from the ground up</p><h2>Room to live.<br /><em>Built to last.</em></h2><a className="light-link" href="#contact">Our approach <ArrowRight size={16} /></a></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div><p className="eyebrow">Your next chapter starts here</p><h2>Let's build<br />something <em>lasting.</em></h2></div>
        <div className="contact-right"><p>Have a property, a plan, or just the beginning of an idea? We’d love to hear about it.</p><a className="contact-link" href="mailto:levelupbuilders22@gmail.com">levelupbuilders22@gmail.com <ArrowUpRight size={18} /></a><span className="contact-note">Serving the Greater Boston area</span></div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#top"><span className="brand-mark">LU<span>+</span></span><span className="brand-name">LEVEL UP <span>BUILDERS</span></span></a><span>© 2026 Level Up Builders</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

export default App
