import React, { useState } from 'react'
import cansat from '@/assets/cansat.svg'
import presen from '@/assets/presentation.svg'

const Subs = () => {
  const sections = {
    Aerodinámica: {
      text: 'Contenido de Aerodinámica...',
      images: ['cansat.svg', 'presen.svg']
    },
    CDH: {
      text: 'Contenido de CDH...',
      images: ['cansat.svg', 'presen.svg']
    },
    EPS: {
      text: 'Contenido de EPS...',
      images: ['cansat.svg', 'presen.svg']
    },
    Mecánica: {
      text: 'Contenido de Mecánica...',
      images: ['cansat.svg', 'presen.svg']
    }
  }
  const [selectedSection, setSelectedSection] = useState('Aerodinámica')
  const handleSectionChange = section => {
    setSelectedSection(section)
  }

  return (
    <div className='container-xxl bg-dark px-0'>
      <div className='dynamic-sections'>
        <h2>{selectedSection}</h2>
        <div className='content'>
          <p>{sections[selectedSection].text}</p>
          {sections[selectedSection].images.map((image, index) => (
            <img key={index} src={cansat} alt={`${selectedSection} ${index}`} />
          ))}
        </div>
        <div className='buttons'>
          {Object.keys(sections).map(section => (
            <button
              key={section}
              className={selectedSection === section ? 'active' : ''}
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Subs
