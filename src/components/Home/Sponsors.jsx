import React from 'react'
import SpDescrpt from './SponsDescrpt'
import spons1 from '@/assets/spons1.svg'
import spons2 from '@/assets/spons2.svg'
import spons3 from '@/assets/spons3.svg'
import spons4 from '@/assets/spons4.svg'
import spons5 from '@/assets/spons5.svg'

const Sponsor = () => {
  return (
    <div className='container-fluid py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>Patrocinadores</h2>
      <div className='row mx-0 justify-content-center'>
        <SpDescrpt
          data={{
            href: 'https://www.grupossc.com/',
            src: spons1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.ipn.mx/cda/',
            src: spons2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.ipn.mx/',
            src: spons3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://pcb-mexico.com/',
            src: spons4,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.fundacionpolitecnico.org/',
            src: spons5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
      </div>
      <div className='text-center justify-content-center my-4'>
        <button className='btn btn-outline-light btn-lg px-5'>Ver más ➔</button>
      </div>
    </div>
  )
}

export default Sponsor
