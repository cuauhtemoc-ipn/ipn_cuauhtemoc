import React from 'react'
import ContactForm from './ContactForm'
import Pico1 from '@/assets/Pico1.png'
import Privacy from './Privacy'

const Contact = () => {
  return (
    <div className='container-lg h-full align-content-center py-4'>
      <div className='row mx-0 mt-5 mt-md-0 mt-lg-5'>
        <ContactForm />
        <div className='d-none d-md-flex align-items-center col-6'>
          <img className='mx-auto col-12' src={Pico1} alt='Rocket' />
        </div>
        <Privacy />
        <img className='row d-md-none mx-auto mt-4 col-12 col-sm-9' src={Pico1} alt='Mascot with rocket' />
      </div>
    </div>
  )
}

export default Contact
