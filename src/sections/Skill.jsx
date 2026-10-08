import { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import Skill from '../components/Skill'
import { certifications, skills } from '../data/portfolio'

export default function SkillSection() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)
  const activeSkills = skills.find((group) => group.category === activeCategory)?.items ?? []

  return (
    <Section id='skill'>
      <HeaderSection title='Capabilities' description='The skills and tools I use to plan, build, and ship web applications.' />
      <div className='overflow-x-auto pb-2'>
        <div className='flex min-w-max justify-center gap-2' role='tablist' aria-label='Skill categories'>
          {skills.map((group) => (
            <button
              key={group.category}
              id={`skill-${group.category.toLowerCase().replaceAll(' ', '-')}-tab`}
              type='button'
              role='tab'
              aria-selected={activeCategory === group.category}
              aria-controls='skill-panel'
              onClick={() => setActiveCategory(group.category)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${activeCategory === group.category ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white text-slate-600 hover:bg-blue-50 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'}`}
            >
              {group.category}
            </button>
          ))}
        </div>
      </div>
      <div id='skill-panel' className='mt-6' role='tabpanel' aria-labelledby={`skill-${activeCategory.toLowerCase().replaceAll(' ', '-')}-tab`}>
        <Skill list={activeSkills} />
      </div>
      <div className='mt-14'>
        <h3 className='mb-5 text-xl font-bold text-slate-900 dark:text-white'>Certifications</h3>
        <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {certifications.map((item) => <li key={item} className='rounded-2xl border border-slate-200 bg-white px-4 py-4 font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[.035] dark:text-slate-200'>{item}</li>)}
        </ul>
      </div>
    </Section>
  )
}
