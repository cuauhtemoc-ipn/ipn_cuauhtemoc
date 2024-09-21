import React from 'react'
import ContactForm from '@/components/Home/ContactForm'
import rocketImage from '@/assets/Rocket.png'
import backgroundImage from '@/assets/background.png'
import Privacy from '../components/Home/Privacy'

const ContactUs = () => {
  return (
    <div className='container-xxl h-full py-4 my-5 align-content-center'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <div className='row'>
        <ContactForm />

        <div className='col-6 d-none d-md-flex justify-content-center'>
          <img src={rocketImage} alt='Rocket' />
        </div>
      </div>
      <Privacy />
    </div>
  )
}

export default ContactUs
