import React from 'react'
import { NavLink } from 'react-router-dom'
import SpDescrpt from './SponsDescrpt'
import Altair from '@/assets/Altair_logo.svg'
import ANSYS from '@/assets/ANSYS_logo.png'
import CDA from '@/assets/CDA_logo.svg'
import Esime from '@/assets/Esime_logo.svg'
import GrupoSSC from '@/assets/GrupoSSC_logo.svg'
import Fundación from '@/assets/Fundación_logo.svg'
import IPN from '@/assets/IPN_logo.svg'
import PCB from '@/assets/PCB_logo.svg'

const Sponsor = () => {
  return (
    <div className='container-lg py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>Patrocinadores</h2>
      <div className='row mx-0 justify-content-center align-items-center'>
        <SpDescrpt
          data={{
            href: 'https://altair.com/altair-mexico',
            src: Altair,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://altair.com/altair-mexico',
            src: ANSYS,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.ipn.mx/cda/',
            src: CDA,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.grupossc.com/',
            src: Esime,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.grupossc.com/',
            src: GrupoSSC,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.fundacionpolitecnico.org/',
            src: Fundación,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://www.ipn.mx/',
            src: IPN,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
        <SpDescrpt
          data={{
            href: 'https://pcb-mexico.com/',
            src: PCB,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Odio ut sem nulla pharetra diam. Nisi porta lorem mollis aliquam ut. Auctor neque vitae tempus quam pellentesque nec nam aliquam.'
          }}
        />
      </div>
      <div className='text-center justify-content-center my-4'>
        <NavLink to='/sponsors'>
          <button className='btn btn-outline-light btn-lg px-5'>Ver más ➔</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Sponsor
