import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'

export default function AboutSection() {
  return (
    <Section id='about'>
      <HeaderSection title='About' description='Let me introduce my self :)' />
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
        <img src='/myprofile.jpg' className='rounded-3xl w-60 md:w-auto md:max-w-sm' />
        <div className='flex-1'>
          <p>
            Hello, My name is Faishal Ammar Rasyiq. I am a 6th semester student at Pancasila University. I am a Website Developer, I live in Jakarta, Indonesia.
            <br />
            <br />
            As a developer, I have an interest in Fullstack Developer and Front-End Websites, related to Javascript and Laravel. I am a fast learner and self-taught. For Fullstack I use Laravel framework and for Front-End I use ReactJS framework. I have 2 years of experience working on full-stack developer and frontend developer projects.
          </p>
        </div>
      </div>
    </Section>
  )
}
