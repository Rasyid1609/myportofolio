export default function EducationContent({ data = [] }) {
  return (
    <ol className='relative ml-2 border-l border-blue-200 dark:border-blue-400/30'>
      {data.map((item) => (
        <li key={`${item.company}-${item.title}`} className='relative pb-8 pl-7 last:pb-0'>
          <span className='absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-blue-600 shadow-sm dark:border-slate-900' />
          <div className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[.035] sm:p-6'>
            <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
              <div>
                <h3 className='text-lg font-bold text-slate-900 dark:text-white'>{item.title}</h3>
                <p className='mt-1 font-medium text-blue-700 dark:text-blue-300'>{item.company}</p>
              </div>
              <span className='shrink-0 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300'>{item.date}</span>
            </div>
            <p className='mt-4 leading-7 text-slate-600 dark:text-slate-300'>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
