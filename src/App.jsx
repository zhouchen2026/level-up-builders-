import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Menu } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Contemporary Townhome',
    place: 'Clean lines · Thoughtful details',
    type: 'Custom home',
    image: '/images/projects/project-01.jpg',
    alt: 'Contemporary kitchen with light wood cabinetry and a marble island',
    photos: [
      '/images/projects/project-01.jpg',
      '/images/projects/project-01-02.jpg',
      '/images/projects/project-01-03.jpg',
      '/images/projects/project-01-04.jpg',
      '/images/projects/project-01-05.jpg',
      '/images/projects/project-01-06.jpg',
      '/images/projects/project-01-07.jpg',
      '/images/projects/project-01-08.jpg',
      '/images/projects/project-01-09.jpg',
      '/images/projects/project-01-10.jpg',
    ],
    description: 'A warm, contemporary home shaped by quiet material choices, a light-filled kitchen, and a natural flow between everyday spaces.',
    story: [
      {
        title: 'A kitchen with room to gather',
        body: 'Light wood cabinetry brings warmth to a bright, modern kitchen. Marble surfaces and a generous island create room to cook, share a meal, or pause together, while the clean lines keep the space feeling open and uncluttered.',
      },
      {
        title: 'A calm, cohesive finish',
        body: 'Across the finished rooms, a restrained palette and considered details give the home a consistent feel. Natural light, warm finishes, and comfortable proportions bring a sense of ease to the spaces used every day.',
      },
    ],
  },
  {
    number: '02',
    name: 'A Home for Gathering',
    place: 'Open kitchen · Light-filled living',
    type: 'Townhome',
    image: '/images/projects/project-02-10.jpg',
    alt: 'Bright living room with pale furnishings and large windows',
    photos: [
      '/images/projects/project-02-10.jpg',
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
    description: 'An open, modern townhome designed around shared spaces, with warm wood, generous windows, and quiet, cohesive finishes.',
    story: [
      {
        title: 'Open spaces for gathering',
        body: 'The kitchen, dining area, and living room come together as one bright, connected space. Large windows bring daylight into the home, while warm wood and soft furnishings balance the clean, modern lines.',
      },
      {
        title: 'Room for different rhythms',
        body: 'Beyond the main living area, the home’s bedrooms and bath offer a quieter change of pace. A dedicated work nook and a small bar area add useful places to focus, unwind, or host friends.',
      },
    ],
  },
  {
    number: '03',
    name: 'Modern Scandinavian Residence',
    place: 'Natural light · Modern materials',
    type: 'New construction',
    image: '/images/projects/project-03.jpg',
    alt: 'Light-sided modern home with dark trim and a landscaped entry',
    photos: [
      '/images/projects/project-03.jpg',
      '/images/projects/project-03-02.jpg',
      '/images/projects/project-03-03.jpg',
      '/images/projects/project-03-04.jpg',
      '/images/projects/project-03-05.jpg',
      '/images/projects/project-03-06.jpg',
      '/images/projects/project-03-07.jpg',
      '/images/projects/project-03-08.jpg',
      '/images/projects/project-03-09.jpg',
    ],
    description: 'A new-construction home with a crisp modern profile, light exterior materials, and dark accents that give the facade a clear rhythm.',
    story: [
      {
        title: 'Modern from the first glance',
        body: 'Light siding and dark roofline and window details set a clear contrast across the exterior. The simple geometry and broad windows give the home a distinctly contemporary character.',
      },
      {
        title: 'A welcoming arrival',
        body: 'The entry and landscaping soften the home’s modern lines and create a comfortable transition from the street. It is a clean, straightforward expression of new construction, with the exterior details working together as a whole.',
      },
    ],
  },
]

const renovationProjects = [
  {
    number: '01',
    section: 'Renovation',
    name: '1,500 Sq. Ft. Home Addition',
    place: 'More room to live · Thoughtful details',
    type: 'Addition renovation',
    image: '/images/renovations/southborough/complete-01.jpg',
    alt: 'Bright finished living space in a home addition',
    photos: [
      '/images/renovations/southborough/before-01.jpg',
      ...Array.from({ length: 23 }, (_, index) => `/images/renovations/southborough/in-progress-${String(index + 1).padStart(2, '0')}.jpg`),
      ...Array.from({ length: 8 }, (_, index) => `/images/renovations/southborough/complete-${String(index + 1).padStart(2, '0')}.jpg`),
    ],
    photoStages: [
      'Before',
      ...Array(23).fill('In progress'),
      ...Array(8).fill('Complete'),
    ],
    description: 'A 1,500-square-foot addition that creates room to grow while bringing the new and existing parts of the home together seamlessly. The work included chimney demolition, a carefully integrated transition between old and new spaces, and a modern bathroom designed for everyday comfort.',
    story: [
      {
        title: 'Making room for what comes next',
        body: 'The project began with the existing home and a plan to create more useful living space. The before photo captures the starting point for the work.',
      },
      {
        title: 'A build, from ground work to finish',
        body: 'Construction photos follow the project through excavation and building work, then into the completed interior. The finished rooms bring fresh light, clean details, and added room to the home.',
      },
    ],
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
  const [activeWorkType, setActiveWorkType] = useState('New Construction')
  const visibleProjects = activeWorkType === 'New Construction' ? projects : renovationProjects

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
        <Link className="header-cta" to="/start-project">Start a project <ArrowUpRight size={15} /></Link>
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
          <Link className="text-link" to="/start-project">Start a project <ArrowRight size={16} /></Link>
        </div>
        <div className="work-tabs" role="tablist" aria-label="Filter projects by type">
          {['New Construction', 'Renovation'].map((type) => (
            <button key={type} className={`work-tab${activeWorkType === type ? ' active' : ''}`} role="tab" aria-selected={activeWorkType === type} onClick={() => setActiveWorkType(type)}>{type}</button>
          ))}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <Link className="project-card" key={`${activeWorkType}-${project.number}`} to={project.section === 'Renovation' ? `/renovation/${Number(project.number)}` : `/project/${Number(project.number)}`} aria-label={`View ${project.name}`}>
              <div className="project-image-wrap">
                <img src={project.image} alt={project.alt} className="project-image" loading="lazy" />
                <span className="project-arrow"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-copy">
                <div className="project-meta"><span>{project.number} / {String(visibleProjects.length).padStart(2, '0')}</span><span>{project.type}</span></div>
                <h3>{project.name}</h3>
                <p className="project-place">{project.place}</p>
                <p className="project-description">{project.description}</p>
                <span className="project-view">Explore project <ArrowRight size={16} /></span>
              </div>
            </Link>
          ))}
        </div>
        {visibleProjects.length === 0 && (
          <div className="work-empty" role="tabpanel">
            <p className="eyebrow">Renovations</p>
            <h3>Every home has room to become more.</h3>
            <p>Our renovation portfolio is taking shape. Have a home in mind? We’d love to hear what you’re planning.</p>
            <Link className="text-link" to="/start-project">Tell us about your project <ArrowRight size={16} /></Link>
          </div>
        )}
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
  const location = useLocation()
  const isRenovation = location.pathname.startsWith('/renovation/')
  const project = (isRenovation ? renovationProjects : projects).find((item) => Number(item.number) === Number(projectId))
  const [activePhoto, setActivePhoto] = useState(0)
  const [activeStage, setActiveStage] = useState('Before')

  useEffect(() => {
    setActivePhoto(0)
    setActiveStage('Before')
  }, [location.pathname])

  if (!project) {
    return <main className="detail-page"><Link className="back-link" to="/"><ArrowLeft size={16} /> Back to our work</Link><h1>Project not found</h1><Link className="text-link" to="/">Explore our work <ArrowRight size={16} /></Link></main>
  }

  const showPhoto = (index) => {
    const nextPhoto = (index + project.photos.length) % project.photos.length
    setActivePhoto(nextPhoto)
    if (project.photoStages) setActiveStage(project.photoStages[nextPhoto])
  }
  const thumbnailIndices = project.photoStages
    ? project.photoStages.flatMap((stage, index) => stage === activeStage ? [index] : [])
    : project.photos.map((_, index) => index)

  return (
    <main className="detail-page">
      <header className="detail-header">
        <Link className="brand" to="/" aria-label="Level Up Builders home"><span className="brand-mark">LU<span>+</span></span><span className="brand-name">LEVEL UP <span>BUILDERS</span></span></Link>
        <Link className="back-link" to="/#work"><ArrowLeft size={15} /> All projects</Link>
      </header>
      <section className="detail-content">
        <p className="eyebrow">{isRenovation ? 'Renovation' : 'Project'} {project.number} <span className="detail-type">· {project.type}</span></p>
        <div className="detail-heading"><div><h1>{project.name}</h1><p>{project.description}</p></div><span className="detail-count">{String(activePhoto + 1).padStart(2, '0')} / {String(project.photos.length).padStart(2, '0')}</span></div>
        {project.photoStages && <div className="detail-stage-tabs" role="group" aria-label="Jump to a project photo stage">{['Before', 'In progress', 'Complete'].map((stage) => <button key={stage} type="button" aria-pressed={activeStage === stage} className={activeStage === stage ? 'active' : ''} onClick={() => { setActiveStage(stage); setActivePhoto(project.photoStages.indexOf(stage)) }}>{stage}<span>{project.photoStages.filter((item) => item === stage).length}</span></button>)}</div>}
        <div className="slideshow">
          <img src={project.photos[activePhoto]} alt={`${project.name}, photo ${activePhoto + 1}`} />
          {project.photoStages && <span className="photo-stage-label">{project.photoStages[activePhoto]}</span>}
          {project.photos.length > 1 && <div className="slide-controls"><button onClick={() => showPhoto(activePhoto - 1)} aria-label="Previous photo"><ChevronLeft /></button><button onClick={() => showPhoto(activePhoto + 1)} aria-label="Next photo"><ChevronRight /></button></div>}
        </div>
        {project.photos.length > 1 && <div className="slide-thumbnails" aria-label={`Choose a ${activeStage.toLowerCase()} photo`}>{thumbnailIndices.map((index) => <button key={project.photos[index]} onClick={() => showPhoto(index)} className={activePhoto === index ? 'active' : ''} aria-label={`Show ${project.photoStages?.[index]?.toLowerCase() ?? ''} photo ${index + 1}`} aria-pressed={activePhoto === index}><img src={project.photos[index]} alt="" loading="lazy" /></button>)}</div>}
        <section className="project-story">
          <p className="eyebrow">Project story</p>
          <div className="story-grid">{project.story.map((section) => <article key={section.title}><h2>{section.title}</h2><p>{section.body}</p></article>)}</div>
        </section>
        <div className="detail-footer"><span>Level Up Builders · Greater Boston</span><a href="mailto:levelupbuilders22@gmail.com">Discuss a project <ArrowUpRight size={16} /></a></div>
      </section>
    </main>
  )
}

export default App
