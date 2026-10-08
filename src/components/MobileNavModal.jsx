export default function MobileNavModal({ names = [], onNavigate = () => {} }) {
  return (
    <div className='md:hidden fixed capitalize bg-white dark:bg-[#1d1d1d] bottom-14 pb-10 pt-4 left-0 right-0 rounded-t-xl shadow-navModal'>
      <ul className='grid grid-cols-3 gap-8 px-5'>
        {names.map((name) => {
          return (
            <li key={name}><a href={`#${name}`} onClick={onNavigate} className='font-semibold'>{name}</a></li>
          )
        })}
      </ul>
    </div>
  )
}
