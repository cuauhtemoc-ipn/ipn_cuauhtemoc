import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import projectHeader from '@/assets/CansatCucei/CuceiBanner.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/CansatCucei/content.json'

const CansatCucei = () => {
  const updateUrl = url => {
    const newHeight = window.innerHeight

    // Extract the width (w) and height (h) parameters from the URL using stricter regular expressions
    const widthMatch = url.match(/w(\d+)(?=-h\d+)/) // Look for "w" followed by digits and "-h"
    const heightMatch = url.match(/h(\d+)(?=-s)/) // Look for "h" followed by digits and "-s"

    if (widthMatch && heightMatch) {
      const currentWidth = parseInt(widthMatch[1], 10)
      const currentHeight = parseInt(heightMatch[1], 10)

      // Calculate the proportional new width
      const newWidth = Math.round((currentWidth / currentHeight) * newHeight)
      // Replace the old width and height with the new values, keeping boundaries intact
      const updatedUrl = url
        .replace(/w\d+(?=-h\d+)/, `w${newWidth}`)
        .replace(/h\d+(?=-s)/, `h${newHeight}`)

      return updatedUrl
    }

    // Return the original URL if no width/height parameters are found
    return url
  }

  return (
    <div>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${updateUrl(
            'https://lh3.googleusercontent.com/pw/AP1GczNdbjNtDgUzkuST6avjfehTy00N2xjRMcLCAga2Crkte2y2cM96WZKv_nLkbPQIq2KxsgbuhscHtjp1lZ1-b3M3G-1UFveLa0pHClB8-P157Ju7mCKccGJCPTm5hoZaZM4dsXNKf5aT4RcyhIzY_1QB=w1290-h917-s-no-gm?authuser=0'
          )})`
          // backgroundImage: `url(${backgroundImage})`
        }}
      />
      <ProjectDetailHeader
        image={projectHeader}
        name='CanSat CUCEI'
        text='Organizado por el Centro Universitario de Ciencias Exactas e Ingenierías (CUCEI) de la Universidad de Guadalajara, el concurso CanSat CUCEI es una competencia de diseño, construcción y lanzamiento de pequeños satélites. Los equipos deben desarrollar satélites del tamaño de una lata de refresco que simulan misiones aeroespaciales, incluyendo la captura de datos y telemetría durante el vuelo y el aterrizaje. La competencia replica un programa aeroespacial a pequeña escala, donde los equipos son evaluados en diferentes fases del proyecto, como la planificación, diseño, ejecución y análisis post-lanzamiento​'
        url='http://cansat.cucei.udg.mx/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default CansatCucei
