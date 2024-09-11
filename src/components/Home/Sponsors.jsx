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
  const sponsorsData = [
    {
      href: 'https://altair.com/altair-mexico',
      src: Altair,
      text: 'Known as a premier tourist destination around the world, Mexico is a multicultural country brimming with history, tradition, and beauty. Additionally, Mexico has increasingly become a global hub for STEM graduates. At our Mexico City office, employees can enjoy a collaborative, flexible work environment that prioritizes team communication and places an emphasis on a modern work/life balance.'
    },
    {
      href: 'https://www.ansys.com/',
      src: ANSYS,
      text: 'For more than 50 years, Ansys software has enabled innovators across industries to push boundaries with the predictive power of simulation. From sustainable transportation and advanced semiconductors, to satellite systems and life-saving medical devices, the next great leaps in human advancement will be powered by Ansys.'
    },
    {
      href: 'https://www.ipn.mx/cda/',
      src: CDA,
      text: 'El Centro de Desarrollo Aeroespacial es la Unidad Académica que promueve, coordina y realiza acciones de investigación científica, desarrollo tecnológico e innovación en materia aeroespacial, fomentando la formación de capital humano altamente capacitado, el análisis de la regulación aplicable y la participación institucional en los ámbitos nacional e internacional con una perspectiva de beneficio social.'
    },
    {
      href: 'https://www.esimetic.ipn.mx/',
      src: Esime,
      text: 'Ser la Escuela rectora de la educación tecnológica en México, en el área aeronáutica, espacial y automotriz, en la generación, aplicación, innovación, difusión y transferencia del conocimiento científico y tecnológico, derivado de actividades de investigación, creada para contribuir al desarrollo económico, sustentable, social y político de la nación'
    },
    {
      href: 'https://www.grupossc.com/',
      src: GrupoSSC,
      text: 'En Grupo SSC somos expertos en Simulación de Ingeniería en los campos; estructurales, térmicos, de fluidos, electromagnéticos, óptica, manufactura aditiva y diseño 3D. Como representantes de Ansys Inc por mas de 32 años en México somos la empresa lider, pionera y mas grande ofreciendo a nuestros clientes las mejores herramientas de software, consultoría, formación, tutoría y soporte técnico.'
    },
    {
      href: 'https://www.fundacionpolitecnico.org/',
      src: Fundación,
      text: 'Obtener  y aplicar donativos de forma transparente y eficiente para contribuir a mejorar su infraestructura, equipamiento de aulas, talleres y laboratorios en las diversas escuelas, centros, unidades y dependencias; así como otorgar becas;  propiciar estancias empresariales; aumentar la matrícula; elevar la calidad educativa y la eficiencia terminal del Instituto Politécnico Nacional.'
    },
    {
      href: 'https://www.ipn.mx/',
      src: IPN,
      text: 'En el Instituto Politécnico Nacional encontrarás una variedad de programas académicos que te ayudarán a mejorar y desarrollar tu experiencia de aprendizaje. Somos líderes en la generación, aplicación, difusión y transferencia del conocimiento científico y tecnológico. El IPN se especializa en ingeniería, física, matemáticas, nuevas tecnologías, ciencias médicas y biológicas, así como en ciencias sociales; estamos seguros de que encontrarás algo acorde a tus necesidades académicas y de desarrollo profesional.'
    },
    {
      href: 'https://pcb-mexico.com/',
      src: PCB,
      text: 'En PCB México también damos el servicio de clonado de tarjeta. Es un servicio que es bastante requerido cuando las tarjetas se dañan o se te perdió la documentación o por alguna razón el diseñador no te proporcionó los documentos completos. Nosotros podemos crear una tarjeta a partir de que nos des una tarjeta física.'
    }
  ]
  return (
    <div className='container-lg py-4 h-full'>
      <h2 className='display-3 text-light fw-semibold my-5'>Patrocinadores</h2>
      <div className='row mx-0 justify-content-center align-items-center'>
        {sponsorsData.map((sponsor, index) => (
          <SpDescrpt key={index} data={sponsor} index={index} />
        ))}
      </div>
      <div className='text-center justify-content-center my-4'>
        <NavLink to='/sponsors'>
          <button className='btn btn-outline-light btn-lg px-5'>
            Ver más ➔
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Sponsor
