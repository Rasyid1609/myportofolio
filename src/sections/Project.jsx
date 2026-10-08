import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import { projects } from '../data/portfolio'

export default function ProjectSection() {
  return (
    <Section id='project'>
      <HeaderSection title='Selected work' description='A selection of products and features I have helped bring to life.' />
      <ul className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {projects.map((project, index) => (
          <li key={project.name} className='project-card group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 dark:border-white/10 dark:bg-white/[.035] dark:hover:border-blue-400/40'>
            <div className='flex items-start justify-between gap-4'>
              <span className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 text-sm font-extrabold text-blue-700 dark:from-blue-400/15 dark:to-emerald-400/10 dark:text-blue-300'>{String(index + 1).padStart(2, '0')}</span>
              <span className='rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-white/10 dark:text-slate-300'>{project.category}</span>
            </div>
            <h3 className='mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300'>{project.name}</h3>
            <p className='mt-3 leading-7 text-slate-600 dark:text-slate-300'>{project.description}</p>
            <ul className='mt-5 flex flex-wrap gap-2' aria-label={`${project.name} technologies`}>
              {project.stack.map((item) => <li key={item} className='rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:text-slate-300'>{item}</li>)}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
