import { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import EducationContent from '../components/EducationContent'

export default function EducationSection() {
  const [tab, setTab] = useState(1)

  const formal = [
    {
      title: 'Universitas Pancasila',
      date: '2022 - Sekarang',
      description: 'Teknik Informatika. GPA: 3.70',
    },
    {
      title: 'Institut Teknologi Speuluh Nopember, Pendidikan Ahli Pemograman Sistem Informasi (PAPSI ITS)',
      date: '2019 - 2021',
      description: 'Sistem Informasi. GPA: 3.20',
    },
  ]

  const nonFormal = [
    {
      title: 'Freelance FullStack Developer',
      date: '2023 - Sekarang',
      description:
        'Membuat Aplikasi Rekam Medis menggunakan framework laravel dan MySql sebagai database, Membuat database Relation One to Many.',
    },
    {
      title: 'FullStack Porgrammer | Ghani Artha Farma',
      date: '2021 - 2022',
      description: 'Membuat Aplikasi Manajemen invoice dari distributor menggunakan framework .Net dan SQL Server sebagai database',
    },
  ]

  return (
    <Section id='edukasi'>
      <HeaderSection title='Pengalaman & Edukasi' description='Perjalanan saya' />
      <div>
        <ul className='flex gap-4 md:gap-6 justify-center font-semibold text-black'>
          <li
            onClick={() => setTab(1)}
            className={`${
              tab === 1
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : 'dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Pengalaman
          </li>
          <li
            onClick={() => setTab(2)}
            className={`${
              tab === 2
                ? 'bg-blue-600 dark:bg-blue-600 text-white'
                : ' dark:bg-zinc-900 hover:bg-blue-200 dark:hover:bg-zinc-950'
            } px-4 py-2 bg-blue-100 dark:text-white cursor-pointer rounded-md`}
          >
            Edukasi
          </li>
        </ul>
        <div className='pt-10'>
          {tab === 1 && <EducationContent data={nonFormal} />}
          {tab === 2 && <EducationContent data={formal} />}
        </div>
      </div>
    </Section>
  )
}
