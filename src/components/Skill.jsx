export default function Skill({ list = [] }) {
  return (
    <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
      {list.map((item) => (
        <li key={item} className='skill-chip flex min-h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 dark:border-white/10 dark:bg-white/[.035] dark:text-slate-200'>
          <span className='h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-emerald-400' />
          {item}
        </li>
      ))}
    </ul>
  )
}
