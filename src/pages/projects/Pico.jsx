import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import projectHeader from '@/assets/Picosatelites/BannerPico.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/Picosatelites/content.json'

const Pico = () => {
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
        name='Picosatélites'
        text='La Competencia Nacional de Picosatélites, permite a los estudiantes diseñar y lanzar pequeños satélites llamados CANSAT, simulando misiones espaciales reales. Los equipos deben desarrollar tecnologías que recojan datos de telemetría durante el vuelo y transmitan la información a una estación en tierra. Este evento fomenta el aprendizaje interdisciplinario en áreas como electrónica y aeronáutica, ofreciendo una experiencia completa en el ciclo de vida de un proyecto espacial, desde la planificación hasta el análisis post-lanzamiento, bajo los estándares de UNISEC México.'
        url='https://www.puebla.tecnm.mx/concurso-nacional-pico-satelites-educativos-cansat/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Pico
