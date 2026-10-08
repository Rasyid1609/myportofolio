import { useEffect, useState } from 'react'
import Container from '../components/Container'
import NavItem from '../components/NavItem'
import MobileNavModal from '../components/MobileNavModal'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [theme, setTheme] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [target, setTarget] = useState('#home')
  const html = document.documentElement

  useEffect(() => {
    html.classList.toggle('dark', theme)
  }, [html, theme])

  const navbarList = ['home', 'about', 'experience', 'skill', 'project', 'contact']

  return (
    <nav aria-label='Main navigation'>
      <div className='navbar-glass fixed left-1/2 top-auto bottom-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-full border border-white/70 bg-white/70 text-slate-800 shadow-[0_12px_40px_rgba(15,23,42,.14)] backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-100 dark:shadow-[0_12px_40px_rgba(0,0,0,.4)] md:bottom-auto md:top-5'>
        <Container>
          <div className='grid min-h-[3.75rem] grid-cols-[1fr_auto_1fr] items-center gap-3 py-2 sm:px-2'>
            <button
              type='button'
              aria-label={showModal ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={showModal}
              onClick={() => setShowModal((open) => !open)}
              className='grid h-11 w-11 place-items-center rounded-full border border-slate-200/70 bg-white/55 text-xl transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:hidden'
            >
              {showModal ? <FiX aria-hidden='true' /> : <FiMenu aria-hidden='true' />}
            </button>
            <span className='md:hidden' aria-hidden='true' />

            <ul className='navbar-glass-list hidden items-center gap-1 rounded-full bg-slate-900/[.045] p-1 font-rubik text-sm font-semibold dark:bg-white/[.06] md:flex'>
              {navbarList.map((name) => {
                const hash = `#${name}`
                return (
                  <NavItem
                    onClick={() => setTarget(hash)}
                    data-active={target === hash ? 'true' : 'false'}
                    className={`rounded-full px-3 py-2 transition-colors ${target === hash ? 'bg-white text-slate-900 shadow-sm dark:bg-white/15 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'}`}
                    key={name}
                    name={name}
                  />
                )
              })}
            </ul>

            <button
              type='button'
              aria-label={theme ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setTheme((current) => !current)}
              className='col-start-3 ml-auto grid h-11 w-11 place-items-center rounded-full border border-slate-200/70 bg-white/65 text-lg text-amber-500 shadow-sm transition duration-300 hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-white/[.06] dark:text-sky-300 dark:hover:bg-white/10'
            >
              {theme ? <FiSun aria-hidden='true' /> : <FiMoon aria-hidden='true' />}
            </button>
          </div>
        </Container>
      </div>

      {showModal && <MobileNavModal names={navbarList} onNavigate={() => setShowModal(false)} />}
    </nav>
  )
}
