import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import backgroundImage from '@/assets/background.png'
import projectHeader from '@/assets/Enmice/EnmiceBanner.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/Enmice/content.json'

const Enmice = () => {
  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <ProjectDetailHeader
        image={projectHeader}
        name='ENMICE'
        text='La competencia ENMICE (Encuentro Nacional de Ingeniería en Cohetería Experimental) es un evento clave en el desarrollo de la cohetería experimental en México. Organizada por la Agencia Espacial Mexicana, la Agencia Federal de Aviación Civil, y otros colaboradores, reúne a estudiantes, investigadores y profesionales en un espacio donde pueden poner a prueba sus habilidades de diseño y lanzamiento de cohetes experimentales. Los equipos compiten en distintas categorías, como el lanzamiento con carga útil a diferentes altitudes, y el evento fomenta la colaboración, el networking y el intercambio de conocimientos dentro de la comunidad aeroespacial mexicana.'
        url='https://enmice.mx/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Enmice
