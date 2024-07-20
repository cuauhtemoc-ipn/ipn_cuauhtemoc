import React from 'react'
import ContactForm from './ContactForm'
import rocketImage from '@/assets/Rocket.png'

const Contact = () => {
  return (
    <div className='container-xxl h-full py-4 align-content-center'>
      <div className='row'>
        <ContactForm />

        <div className='col-6 d-none d-md-flex justify-content-center'>
          <img src={rocketImage} alt='Rocket' />
        </div>
      </div>
    </div>
  )
}

export default Contact
