import React from 'react'
import ContactForm from './ContactForm'
import Pollito1 from '@/assets/Pollito1.png'
import Privacy from './Privacy'

const Contact = () => {
  return (
    <div className='container-lg h-full py-4 align-content-center'>
      <div className='row mt-5 mt-md-0'>
        <ContactForm />

        <div className='col-6 d-none d-md-flex align-items-center'>
          <img src={Pollito1} alt='Rocket' className='col-12' />
        </div>
        <Privacy />
      </div>
    </div>
  )
}

export default Contact
