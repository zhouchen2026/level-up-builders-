import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Contemporary Townhome',
    place: 'Clean lines · Thoughtful details',
    type: 'Custom home',
    image: '/images/projects/project-01.jpg',
    alt: 'Modern white townhome with large windows and a landscaped entry',
    photos: ['/images/projects/project-01.jpg'],
    description: 'A contemporary home shaped by clean lines, generous windows, and thoughtful details throughout.',
  },
  {
    number: '02',
    name: 'A Home for Gathering',
    place: 'Open kitchen · Light-filled living',
    type: 'Townhome',
    image: '/images/projects/project-02.jpg',
    alt: 'Bright living room with pale furnishings and large windows',
    photos: [
      '/images/projects/project-02.jpg',
      '/images/projects/project-02-02.jpg',
      '/images/projects/project-02-03.jpg',
      '/images/projects/project-02-04.jpg',
      '/images/projects/project-02-05.jpg',
      '/images/projects/project-02-06.jpg',
      '/images/projects/project-02-07.jpg',
      '/images/projects/project-02-08.jpg',
      '/images/projects/project-02-09.jpg',
    ],
    description: 'A warm, light-filled townhome with an open kitchen, welcoming living spaces, and carefully selected finishes.',
  },
  {
    number: '03',
    name: 'Warm Modern Residence',
    place: 'Natural light · Modern materials',
    type: 'New construction',
    image: '/images/projects/project-03.jpg',
    alt: 'Light-sided modern home with dark trim and a landscaped entry',
    photos: ['/images/projects/project-03.jpg'],
    description: 'A modern residence bringing together natural light, durable materials, and a calm, inviting feel.',
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
            <Link className="project-card" key={project.number} to={`/project/${Number(project.number)}`} aria-label={`View ${project.name}`}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} className="project-image" loading="lazy" />
                <span className="project-arrow"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-meta"><span>{project.number} / 03</span><span>{project.type}</span></div>
              <h3>{project.name}</h3>
              <p>{project.place}</p>
            </Link>
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

export function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => Number(item.number) === Number(projectId))
  const [activePhoto, setActivePhoto] = useState(0)

  if (!project) {
    return <main className="detail-page"><Link className="back-link" to="/"><ArrowLeft size={16} /> Back to our work</Link><h1>Project not found</h1><Link className="text-link" to="/">Explore our work <ArrowRight size={16} /></Link></main>
  }

  const showPhoto = (index) => setActivePhoto((index + project.photos.length) % project.photos.length)

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link className="brand" to="/" aria-label="Level Up Builders home"><span className="brand-mark">LU<span>+</span></span><span className="brand-name">LEVEL UP <span>BUILDERS</span></span></Link>
        <Link className="back-link" to="/#work"><ArrowLeft size={15} /> All projects</Link>
      </header>
      <section className="detail-content">
        <p className="eyebrow">Project {project.number} <span className="detail-type">· {project.type}</span></p>
        <div className="detail-heading"><div><h1>{project.name}</h1><p>{project.description}</p></div><span className="detail-count">{String(activePhoto + 1).padStart(2, '0')} / {String(project.photos.length).padStart(2, '0')}</span></div>
        <div className="slideshow">
          <img src={project.photos[activePhoto]} alt={`${project.name}, photo ${activePhoto + 1}`} />
          {project.photos.length > 1 && <div className="slide-controls"><button onClick={() => showPhoto(activePhoto - 1)} aria-label="Previous photo"><ChevronLeft /></button><button onClick={() => showPhoto(activePhoto + 1)} aria-label="Next photo"><ChevronRight /></button></div>}
        </div>
        {project.photos.length > 1 && <div className="slide-thumbnails" aria-label="Choose a photo">{project.photos.map((photo, index) => <button key={photo} onClick={() => showPhoto(index)} className={activePhoto === index ? 'active' : ''} aria-label={`Show photo ${index + 1}`} aria-pressed={activePhoto === index}><img src={photo} alt="" /></button>)}</div>}
        <div className="detail-footer"><span>Level Up Builders · Greater Boston</span><a href="mailto:levelupbuilders22@gmail.com">Discuss a project <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  )
}

export default App
