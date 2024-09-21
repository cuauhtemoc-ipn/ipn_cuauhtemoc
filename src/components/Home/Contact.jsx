import React from 'react'
import ContactForm from './ContactForm'
import rocketImage from '@/assets/Rocket.png'
import Privacy from './Privacy'

const Contact = () => {
  return (
    <div className='container-lg h-full py-4 align-content-center'>
      <div className='row mt-5 mt-md-0'>
        <ContactForm />

        <div className='col-6 d-none d-md-flex justify-content-center'>
          <img src={rocketImage} alt='Rocket' />
        </div>
        <Privacy />
      </div>
    </div>
  )
}

export default Contact
