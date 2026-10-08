export default function HeaderSection({ title, description }) {
  return (
    <div className='mx-auto max-w-2xl pb-8 text-center md:pb-12'>
      <p className='mb-2 text-xs font-bold uppercase tracking-[.2em] text-blue-600 dark:text-blue-400'>Portfolio</p>
      <h2 className='py-2 text-3xl font-poppins font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl'>{title}</h2>
      {description && <p className='mt-2 leading-7 text-slate-500 dark:text-slate-400'>{description}</p>}
    </div>
  )
}
