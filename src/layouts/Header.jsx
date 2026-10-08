import Navbar from './Navbar'
import Container from '../components/Container'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { profile } from '../data/portfolio'

export default function Header() {
  return (
    <header id='home' className='relative min-h-screen flex items-center overflow-hidden pt-16'>
      <Navbar />
      <div className='hero-glow hero-glow-one' />
      <div className='hero-glow hero-glow-two' />
      <Container>
        <div className='grid items-center gap-12 py-16 md:grid-cols-[1.2fr_.8fr] md:py-20'>
          <div className='hero-copy relative z-10'>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200'>
              <span className='availability-dot' /> Jakarta, Indonesia <span className='text-slate-400'>/</span> Available for opportunities
            </div>
            <p className='mb-3 font-semibold uppercase tracking-[.18em] text-blue-600 dark:text-blue-400'>Hello, I&apos;m</p>
            <h1 className='max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl'>
              Faishal Ammar <span className='text-gradient'>Rasyiq</span>
            </h1>
            <TypeAnimation
              sequence={['Full Stack Web Developer', 2200, 'Software Developer Intern @ INKA', 2200]}
              wrapper='p'
              className='mt-5 block text-xl font-semibold text-slate-700 dark:text-slate-200 sm:text-2xl'
              speed={45}
              repeat={Infinity}
            />
            <p className='mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg'>
              Building reliable web applications from idea to launch, with 2+ years of experience across Laravel, React, APIs, and databases.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a href='#project' className='inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700'>
                Explore my work <FiArrowUpRight aria-hidden='true' />
              </a>
              <a href={profile.cv} download className='inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-400 dark:border-white/15 dark:bg-white/5 dark:text-white'>
                Download CV <FiArrowDown aria-hidden='true' />
              </a>
            </div>
            <div className='mt-8 flex items-center gap-3'>
              <a aria-label='GitHub' href={profile.github} target='_blank' rel='noreferrer' className='social-link'><FiGithub /></a>
              <a aria-label='LinkedIn' href={profile.linkedin} target='_blank' rel='noreferrer' className='social-link'><FiLinkedin /></a>
              <a aria-label='Email' href={`mailto:${profile.email}`} className='social-link'><FiMail /></a>
              <span className='ml-2 text-sm text-slate-500 dark:text-slate-400'>Let&apos;s build something useful.</span>
            </div>
          </div>

          <div className='hero-portrait-wrap relative mx-auto w-full max-w-md'>
            <div className='portrait-orbit portrait-orbit-a' />
            <div className='portrait-orbit portrait-orbit-b' />
            <div className='portrait-card relative z-10 overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-blue-100 via-white to-emerald-100 p-3 shadow-2xl shadow-blue-900/10 dark:border-white/10 dark:from-blue-950 dark:via-slate-900 dark:to-emerald-950'>
              <img src='/profile.png' alt='Faishal Ammar Rasyiq' className='h-[22rem] w-full rounded-[1.5rem] object-cover object-center sm:h-[27rem]' />
            </div>
            <div className='floating-tag floating-tag-react'>React.js</div>
            <div className='floating-tag floating-tag-laravel'>Laravel</div>
            <div className='floating-tag floating-tag-years'><span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>2+</span><span>years building<br />for the web</span></div>
          </div>
        </div>
      </Container>
    </header>
  )
}
