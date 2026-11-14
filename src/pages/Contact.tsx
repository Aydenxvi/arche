import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../config/site'
import { Figure } from '../components/ui/Figure'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { Field, fieldClasses } from '../components/ui/Field'
import { ArrowLink } from '../components/ui/ArrowLink'
import { useSeo } from '../lib/seo'
import { cx } from '../lib/utils'

interface FormState {
  name: string
  email: string
  projectType: string
  budget: string
  location: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = { name: '', email: '', projectType: '', budget: '', location: '', message: '' }

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'We need an email address to reply to.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'That email address does not look right.'
  if (!values.projectType) errors.projectType = 'Choose the closest project type.'
  if (values.message.trim().length < 20) errors.message = 'A sentence or two about the project, please (20 characters minimum).'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<string | null>(null)
  useSeo({ title: 'Contact', description: `Enquiries — ${site.contact.email}` })

  const set = (key: keyof FormState) => (event: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: event.target.value }))
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus(null)
      const first = document.getElementById(Object.keys(found)[0])
      first?.focus()
      return
    }

    if (site.contact.formMode === 'mailto') {
      const subject = `Enquiry — ${values.projectType}${values.location ? ` — ${values.location}` : ''}`
      const body = [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Project type: ${values.projectType}`,
        `Budget: ${values.budget || 'Not stated'}`,
        `Location: ${values.location || 'Not stated'}`,
        '',
        values.message,
      ].join('\n')
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus(
        'Your email application should now be opening with this enquiry ready to send. Nothing has been transmitted from this page.',
      )
    } else {
      setStatus(
        'This is a demonstration form. Your message was validated but not sent anywhere — there is no backend behind this site.',
      )
      setValues(EMPTY)
    }
  }

  return (
    <>
      <header className="shell pb-16 pt-36 sm:pt-44 lg:pb-20 lg:pt-56">
        <p className="eyebrow text-bronze">Contact</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <RevealText
            as="h1"
            immediate
            text="Tell us about the site."
            className="font-display text-display-xl lg:col-span-8"
          />
          <Reveal className="lg:col-span-3 lg:col-start-10" delay={0.15}>
            <p className="text-pretty text-base leading-relaxed opacity-70">
              Explore the example enquiry form and its validation. This is a fictional studio; no message will be sent.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="shell pb-section">
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <div className="border-t rule pt-6">
              <h2 className="eyebrow opacity-50">Enquiries</h2>
              <a href={`mailto:${site.contact.email}`} className="link-underline mt-4 inline-block font-display text-2xl">
                {site.contact.email}
              </a>
              <p className="mt-3 text-sm opacity-60">{site.contact.phone}</p>
              <p className="mt-6 text-sm opacity-60">{site.contact.hours}</p>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
              {site.contact.studios.map((studio) => (
                <div key={studio.city} className="border-t rule pt-6">
                  <h2 className="eyebrow opacity-50">{studio.city}</h2>
                  <address className="mt-4 text-sm not-italic leading-relaxed opacity-70">
                    {studio.lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </address>
                </div>
              ))}
            </div>

            <Figure
              id="contact-01"
              alt="The studio entrance at dusk"
              className="mt-12 hidden w-full lg:block"
          frame="aspect-[4/3]"
              sizes="30vw"
              parallax={16}
            />
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={onSubmit} noValidate className="border-t rule pt-8">
              <p className="eyebrow opacity-50">Project enquiry · demo only</p>
              <p className="mt-4 text-sm leading-relaxed opacity-65">This demonstration does not submit, store or email messages. The contact details are fictional placeholders.</p>

              <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClasses}
                    placeholder="Your name"
                  />
                </Field>

                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClasses}
                    placeholder="you@example.com"
                  />
                </Field>

                <Field id="projectType" label="Project type" error={errors.projectType}>
                  <select
                    id="projectType"
                    name="projectType"
                    value={values.projectType}
                    onChange={set('projectType')}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                    className={cx(fieldClasses, 'appearance-none')}
                  >
                    <option value="">Select…</option>
                    {site.projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </Field>

                <Field id="budget" label="Budget range" optional>
                  <select
                    id="budget"
                    name="budget"
                    value={values.budget}
                    onChange={set('budget')}
                    className={cx(fieldClasses, 'appearance-none')}
                  >
                    <option value="">Select…</option>
                    {site.budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </Field>

                <Field id="location" label="Site location" optional className="sm:col-span-2">
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={values.location}
                    onChange={set('location')}
                    className={fieldClasses}
                    placeholder="Town, region or plot reference"
                  />
                </Field>

                <Field id="message" label="About the project" error={errors.message} className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={set('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={cx(fieldClasses, 'resize-y')}
                    placeholder="The site, the brief, the timescale — whatever you have so far."
                  />
                </Field>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-8">
                <button
                  type="submit"
                  className="group/arrow inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-label uppercase tracking-[0.16em] text-ivory transition-colors duration-500 hover:bg-ink"
                >
                  {site.contact.formMode === 'mailto' ? 'Compose enquiry' : 'Submit enquiry'}
                </button>
                <p className="max-w-sm text-xs leading-relaxed opacity-55">
                  {site.contact.formMode === 'mailto'
                    ? 'This form has no server. Submitting opens your own email application with the details filled in.'
                    : 'Demonstration form — submissions are validated in the browser and are not sent anywhere.'}
                </p>
              </div>

              <div aria-live="polite" className="mt-6">
                {status ? (
                  <p className="border-l-2 border-bronze py-2 pl-5 text-sm leading-relaxed opacity-80">{status}</p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-bone">
        <div className="shell flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-prose text-pretty text-lede text-stone/80">
            Prefer to see the work first? The archive documents eight projects in detail.
          </p>
          <ArrowLink to="/projects" variant="outline" className="text-bone">View the archive</ArrowLink>
        </div>
      </section>
    </>
  )
}
