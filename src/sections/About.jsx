import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import { profile } from '../data/portfolio'

export default function AboutSection() {
  return (
    <Section id='about'>
      <HeaderSection title='A little about me' description='From understanding the problem to shipping a dependable solution.' />
      <div className='grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-stretch'>
        <div className='about-highlight rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-emerald-50 p-7 dark:border-white/10 dark:from-blue-950/40 dark:to-emerald-950/30'>
          <p className='text-sm font-semibold uppercase tracking-[.16em] text-blue-600 dark:text-blue-400'>My approach</p>
          <p className='mt-4 text-2xl font-semibold leading-snug text-slate-900 dark:text-white'>I enjoy turning complex workflows into clear, useful web experiences.</p>
          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div><p className='text-3xl font-bold text-slate-900 dark:text-white'>5+</p><p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>web apps delivered</p></div>
            <div><p className='text-3xl font-bold text-slate-900 dark:text-white'>2+</p><p className='mt-1 text-sm text-slate-500 dark:text-slate-400'>years of experience</p></div>
          </div>
        </div>
        <div className='flex flex-col justify-center rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[.035]'>
          <p className='text-lg leading-8 text-slate-600 dark:text-slate-300'>{profile.summary}</p>
          <div className='mt-6 flex flex-wrap gap-2'>
            {['Requirements analysis', 'Database design', 'API development', 'Frontend', 'Testing', 'Deployment'].map((item) => (
              <span key={item} className='rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300'>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
