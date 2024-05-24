import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'

export default function AboutSection() {
  return (
    <Section id='tentang'>
      <HeaderSection title='Tentang' description='Biarkan saya memperkenalkan diri' />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img src='/myprofile.jpg' className='rounded-3xl w-60 md:w-auto md:max-w-sm' />
        <div className='flex-1'>
          <p>
            Halo, Nama saya Raditya Faishal Ammar Rasyiq. Saya seorang mahasiswa semester 7 di Universitas Pancasila. Saya seorang
            Pengembang Situs Website, saya tinggal di Madiun, Indonesia.
            <br />
            <br />
            Saya memiliki ketertarikan untuk di bidang Fullstack Developer dan Front-End Website, yang berkaitan dengan
            Javascript dan Laravel. Saya cepat belajar dan otodidak. Untuk Fullstack sendiri saya menggunakan framework laravel dan untuk Front-End saya menggunakan
            framework ReactJS.
          </p>
        </div>
      </div>
    </Section>
  )
}
