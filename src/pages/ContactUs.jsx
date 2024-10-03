import React from 'react'
import ContactForm from '@/components/Home/ContactForm'
import Pollito4 from '@/assets/Pollito4.png'
import Privacy from '../components/Home/Privacy'

const ContactUs = () => {
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
      <div className='container-lg h-full py-4 my-5'>
        <div className='row mx-0 mt-5'>
          <ContactForm />
          <div className='d-none d-md-flex align-items-center col-6'>
            <img className='mx-auto col-11 col-lg-10' src={Pollito4} alt='Masctot Pico' />
          </div>
          <Privacy />
          <img className='row d-md-none mx-auto mt-4 col-10 col-sm-8' src={Pollito4} alt='Mascot with rocket' />
        </div>
      </div>
    </div>
  )
}

export default ContactUs
