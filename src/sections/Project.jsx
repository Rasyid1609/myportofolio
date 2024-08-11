import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'

import meet from '../assets/demo/meet.png'
import taskia from '../assets/demo/taskia.png'
import klinik from '../assets/demo/klinik.png'
import nomads from '../assets/demo/nomads.png'



import tailwind from '../assets/skills/tailwind.svg'
import css from '../assets/skills/css.svg'
import javascript from '../assets/skills/js.svg'
import laravel from '../assets/skills/laravel.svg'
import php from '../assets/skills/php.svg'
import sass from '../assets/skills/sass.svg'
import mysql from '../assets/skills/mysql.png'
import html from '../assets/skills/html.svg'

export default function ProjectSection() {
  const projects = [
    {
      name: 'Nomads Travel Web',
      description:
        'Nomads Web Travel adalah Sebuah website yang difokuskan pada bidang pariwisata. Produk dari Website ini merupakan destinasi perjalanan wisata.',
      img: nomads,
      linkDemo: 'https://github.com/Rasyid1609/nomads',
      linkRepo: 'https://github.com/Rasyid1609/nomads',
      stack: [
        {
          name: 'Laravel',
          icon: laravel,
        },
        {
          name: 'PHP',
          icon: php,
        },
        {
          name: 'HTML',
          icon: html,
        },
        {
          name: 'SASS',
          icon: sass,
        },
        {
          name: 'MySql',
          icon: mysql,
        },
      ],
    },
    {
      name: 'Doctor Appointment Web',
      description: 'Website ini adalah website yang dimana pasien dapat memesan telebih dahulu jika ingin berobat sehingga pasien tidak perlu menunggu lama saat ingin diperiksa. ',
      img: meet,
      linkDemo: 'https://github.com/Rasyid1609/doctorAppointment',
      linkRepo: 'https://github.com/Rasyid1609/doctorAppointment',
      stack: [
        {
          name: 'Laravel',
          icon: laravel,
        },
        {
          name: 'Tailwind.CSS',
          icon: tailwind,
        },
        {
          name: 'PHP',
          icon: php,
        },
        {
          name: 'HTML',
          icon: html,
        },
        {
          name: 'MySql',
          icon: mysql,
        },
      ],
    },
    {
      name: 'Web Klinik',
      description: 'Website ini merupakan sebuah website yang digunakan sebagai rekam medis',
      img: klinik,
      linkDemo: 'https://github.com/Rasyid1609/web-klinik',
      linkRepo: 'https://github.com/Rasyid1609/web-klinik',
      stack: [
        {
          name: 'Laravel',
          icon: laravel,
        },
        {
          name: 'PHP',
          icon: php,
        },
      ],
    },
    {
      name: 'Task Management',
      description: 'Website ini merupakan sebuah website yang digunakan untuk membuat Task',
      img: taskia,
      linkDemo: 'https://github.com/Rasyid1609/taskia',
      linkRepo: 'https://github.com/Rasyid1609/taskia',
      stack: [
        {
          name: 'Javascript',
          icon: javascript,
        },
        {
          name: 'HTML',
          icon: html,
        },
        {
          name: 'CSS',
          icon: css,
        },
      ],
    },
  ]

  return (
    <Section id='project'>
      <HeaderSection title='Project' />
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {projects.map(({ name, description, img, linkDemo, linkRepo, stack }) => {
          return (
            <li
              key={name}
              className='rounded-xl overflow-hidden border dark:border-zinc-700 bg-white dark:bg-[#242424]'
            >
              <a href={linkDemo} title={name} target='_blank' rel='noopener noreferrer'>
                <img src={img} alt={name} />
              </a>
              <div className='p-4'>
                <div className='flex gap-1 justify-between items-center'>
                  <h3 className='text-xl font-poppins font-semibold'>{name}</h3>
                  <div className='self-start flex items-center gap-1'>
                    <a
                      href={linkRepo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='whitespace-nowrap text-lg py-1.5 px-2 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950'
                    >
                      {'</>'}
                    </a>
                    <a
                      href={linkDemo}
                      target='_blank'
                      className='flex items-center gap-1 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-950 p-2 rounded-md'
                    >
                      <span>buka</span>
                      <span>&#11162;</span>
                    </a>
                  </div>
                </div>
                <p className='py-4'>{description}</p>
                <ul className='flex items-center gap-2'>
                  {stack.map((item) => {
                    return (
                      <li key={item.name} title={item.name}>
                        <img src={item.icon} className='h-8 w-8' />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
