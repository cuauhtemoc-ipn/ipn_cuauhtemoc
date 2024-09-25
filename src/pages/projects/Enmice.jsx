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
        text='El Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE), organizado por la Agencia Espacial Mexicana, la Agencia Federal de Aviación Civil y otros colaboradores, es la competencia líder de Cohetería Experimental en México, reuniendo a estudiantes, investigadores y profesionales del sector aeroespacial. Este evento impulsa la industria espacial mexicana, fomentando la participación y el crecimiento del talento nacional en ciencia y tecnología espacial. Los equipos compiten en categorías como el lanzamiento con carga útil a diferentes altitudes, mientras que el ENMICE promueve la colaboración, el networking y el intercambio de conocimientos dentro de la comunidad aeroespacial mexicana.'
        url='https://enmice.mx/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Enmice
