import { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import Section from '../components/Section'
import EducationContent from '../components/EducationContent'
import { education, experiences } from '../data/portfolio'

export default function EducationSection() {
  const [tab, setTab] = useState('experience')
  const tabs = [
    { id: 'experience', label: 'Experience', data: experiences },
    { id: 'education', label: 'Education', data: education },
  ]
  const activeTab = tabs.find((item) => item.id === tab)

  return (
    <Section id='experience'>
      <HeaderSection title='Experience & education' description='A steady path through client work, product teams, and formal study.' />
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 flex justify-center gap-2' role='tablist' aria-label='Experience and education'>
          {tabs.map((item) => (
            <button
              key={item.id}
              id={`${item.id}-tab`}
              type='button'
              role='tab'
              aria-selected={tab === item.id}
              aria-controls={`${item.id}-panel`}
              onClick={() => setTab(item.id)}
              className={`rounded-xl px-5 py-3 font-semibold transition ${tab === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-blue-50 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div id={`${activeTab.id}-panel`} role='tabpanel' aria-labelledby={`${activeTab.id}-tab`}>
          <EducationContent data={activeTab.data} />
        </div>
      </div>
    </Section>
  )
}
