export default function MobileNavModal({ names = [], onNavigate = () => {} }) {
  return (
    <div className='fixed bottom-[5.25rem] left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 rounded-3xl border border-white/70 bg-white/75 p-5 text-slate-800 shadow-[0_16px_48px_rgba(15,23,42,.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/75 dark:text-slate-100 md:hidden'>
      <ul className='grid grid-cols-3 gap-2 capitalize'>
        {names.map((name) => {
          return (
            <li key={name}><a href={`#${name}`} onClick={onNavigate} className='flex min-h-11 items-center justify-center rounded-xl px-2 text-sm font-semibold transition hover:bg-slate-900/5 dark:hover:bg-white/10'>{name}</a></li>
          )
        })}
      </ul>
    </div>
  )
}
