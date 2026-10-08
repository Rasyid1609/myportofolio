import Container from '../components/Container'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'

const footerLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skill'],
  ['Projects', 'project'],
  ['Contact', 'contact'],
]

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white py-10 pb-28 dark:border-white/10 dark:bg-[#0b1020] md:pb-10'>
      <Container>
        <div className='flex flex-col items-center text-center'>
          <a href='#home' className='text-xl font-bold tracking-tight text-slate-900 dark:text-white'>{profile.name}</a>
          <p className='mt-2 text-sm text-slate-500 dark:text-slate-400'>Full Stack Web Developer � Jakarta, Indonesia</p>
          <ul className='mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2'>
            {footerLinks.map(([label, id]) => <li key={id}><a className='text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300' href={`#${id}`}>{label}</a></li>)}
          </ul>
          <div className='mt-6 flex gap-3'>
            <a aria-label='GitHub' href={profile.github} target='_blank' rel='noreferrer' className='social-link'><FiGithub /></a>
            <a aria-label='LinkedIn' href={profile.linkedin} target='_blank' rel='noreferrer' className='social-link'><FiLinkedin /></a>
            <a aria-label='Email' href={`mailto:${profile.email}`} className='social-link'><FiMail /></a>
          </div>
          <p className='mt-7 text-xs text-slate-400'>� {new Date().getFullYear()} {profile.name}</p>
        </div>
      </Container>
    </footer>
  )
}
