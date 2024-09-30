import React from 'react'
import ProjectDetailHeader from '@/components/Projects/ProjectDetailHeader'
import projectHeader from '@/assets/CansatCompetition/comp_header.png'
import Tabs from '../../components/Projects/Tabs'
import content from '@/assets/CansatCompetition/content.json'

const CansatCompetition = () => {
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
        name='CanSat Competition'
        text='Organizada por la NASA, el U.S. Naval Research Laboratory y la American Astronautical Society entre otros, la CanSat Competition es una competencia de diseño, construcción y vuelo que brinda a los equipos la oportunidad de experimentar el ciclo de vida de diseño de un sistema aeroespacial. La competencia CanSat está diseñada para reflejar un programa aeroespacial típico a pequeña escala e incluye todos los aspectos de un programa aeroespacial, desde la revisión preliminar del diseño hasta la revisión posterior a la misión. La misión y sus requisitos están diseñados para reflejar diversos aspectos de misiones del mundo real, incluidos los requisitos de telemetría, comunicaciones y operaciones autónomas. Cada equipo es calificado a lo largo de la competencia en entregables del mundo real, como cronogramas, presentaciones de revisión de diseño y vuelos de demostración.'
        url='https://cansatcompetition.com/'
      />
      <Tabs data={content.data} />
    </div>
  )
}

export default CansatCompetition
