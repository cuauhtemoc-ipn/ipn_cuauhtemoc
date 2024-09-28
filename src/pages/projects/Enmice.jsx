import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import projectHeader from '@/assets/Enmice/EnmiceBanner.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/Enmice/content.json'

const Enmice = () => {
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
        name='ENMICE'
        text='El Encuentro Mexicano de Ingeniería en Cohetería Experimental (ENMICE), organizado por la Agencia Espacial Mexicana, la Agencia Federal de Aviación Civil y otros colaboradores, es la competencia líder de Cohetería Experimental en México, reuniendo a estudiantes, investigadores y profesionales del sector aeroespacial. Este evento impulsa la industria espacial mexicana, fomentando la participación y el crecimiento del talento nacional en ciencia y tecnología espacial. Los equipos compiten en categorías como el lanzamiento con carga útil a diferentes altitudes, mientras que el ENMICE promueve la colaboración, el networking y el intercambio de conocimientos dentro de la comunidad aeroespacial mexicana.'
        url='https://enmice.mx/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default Enmice
