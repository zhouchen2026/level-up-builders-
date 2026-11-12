import { useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectInquiry() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const values = Object.fromEntries(new FormData(event.currentTarget).entries())
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone || 'Not provided'}`,
      `Project type: ${values.projectType || 'Not specified'}`,
      '',
      'Project details:',
      values.projectDetails,
    ].join('\n')
    const subject = encodeURIComponent('New project inquiry | Level Up Builders')
    window.location.href = `mailto:levelupbuilders22@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with your inquiry ready to send.')
  }

  return (
    <main className="inquiry-page">
      <header className="inquiry-header">
        <Link className="brand" to="/" aria-label="Level Up Builders home">
          <span className="brand-mark">LU<span>+</span></span>
          <span className="brand-name">LEVEL UP <span>BUILDERS</span></span>
        </Link>
        <Link className="back-link" to="/"><ArrowLeft size={15} /> Back to our work</Link>
      </header>

      <div className="inquiry-layout">
        <section className="inquiry-intro">
          <p className="eyebrow">Start a project</p>
          <h1>Let’s talk about<br />what you’re <em>building.</em></h1>
          <p>Tell us a little about your plans. We’ll be in touch to learn more and talk through next steps.</p>
          <span className="inquiry-service-area">Serving the Greater Boston area</span>
        </section>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="inquiry-field-row">
            <label className="inquiry-field">
              <span>Your name <b>*</b></span>
              <input name="name" autoComplete="name" required placeholder="Name" />
            </label>
            <label className="inquiry-field">
              <span>Email address <b>*</b></span>
              <input type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
            </label>
          </div>
          <div className="inquiry-field-row">
            <label className="inquiry-field">
              <span>Phone number</span>
              <input type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-5555" />
            </label>
            <label className="inquiry-field">
              <span>What kind of project?</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option>Custom home</option>
                <option>Renovation</option>
                <option>Addition</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label className="inquiry-field">
            <span>Tell us about your project <b>*</b></span>
            <textarea name="projectDetails" required rows="5" placeholder="What are you hoping to build or improve?" />
          </label>
          <button className="inquiry-submit" type="submit">
            Prepare email inquiry <ArrowUpRight size={17} />
          </button>
          <p className="inquiry-email-note">This opens your email app with the details addressed to <a href="mailto:levelupbuilders22@gmail.com">levelupbuilders22@gmail.com</a>.</p>
          <p className="inquiry-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </main>
  )
}
