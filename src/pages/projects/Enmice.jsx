import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import backgroundImage from '@/assets/background.png'
import projectHeader from '@/assets/CansatCompetition/comp_header.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/CansatCompetition/content.json'

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
        text='Organizada por la NASA, el U.S. Naval Research Laboratory y la American Astronautical Society entre otros, la CanSat Competition es una competencia de diseño, construcción y vuelo que brinda a los equipos la oportunidad de experimentar el ciclo de vida de diseño de un sistema aeroespacial. La competencia CanSat está diseñada para reflejar un programa aeroespacial típico a pequeña escala e incluye todos los aspectos de un programa aeroespacial, desde la revisión preliminar del diseño hasta la revisión posterior a la misión. La misión y sus requisitos están diseñados para reflejar diversos aspectos de misiones del mundo real, incluidos los requisitos de telemetría, comunicaciones y operaciones autónomas. Cada equipo es calificado a lo largo de la competencia en entregables del mundo real, como cronogramas, presentaciones de revisión de diseño y vuelos de demostración.'
        url='https://cansatcompetition.com/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Enmice
