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
      text: 'Altair, líder mundial en inteligencia computacional, nos proporciona herramientas para analizar y optimizar proyectos, además de recursos para aprender a usar sus softwares de simulación, HPC e IA. La empresa también ofrece soluciones para diversas industrias, como la automotriz, aeroespacial y la manufactura, ayudándoles a innovar, mejorar la eficiencia y reducir el impacto ambiental. Su objetivo es impulsar la innovación y decisiones inteligentes a través de la ciencia computacional, creando un futuro más conectado y sostenible.'
    },
    {
      href: 'https://www.ansys.com/',
      src: ANSYS,
      text: 'Ansys, líder en software de simulación, nos equipa con herramientas para analizar y probar la resistencia de nuestros proyectos a diferentes condiciones, además de ofrecer recursos para aprender a usar sus softwares. Sus soluciones, que van desde el transporte sostenible hasta los dispositivos médicos, permiten a los innovadores de diversas industrias avanzar en la creación de los próximos grandes saltos en la evolución humana, impulsados por la potencia predictiva de la simulación.'
    },
    {
      href: 'https://www.ipn.mx/cda/',
      src: CDA,
      text: 'El Centro de Desarrollo Aeroespacial es la Unidad Académica que promueve, coordina y realiza acciones de investigación científica, desarrollo tecnológico e innovación en materia aeroespacial, fomentando la formación de capital humano altamente capacitado, el análisis de la regulación aplicable y la participación institucional en los ámbitos nacional e internacional con una perspectiva de beneficio social.'
    },
    {
      href: 'https://www.esimetic.ipn.mx/',
      src: Esime,
      text: 'La ESIME, Unidad Ticomán, es una institución educativa líder en México en el área aeroespacial, automotriz y aeronáutica, dedicada a la formación integral de profesionales de alto nivel. Su compromiso con la investigación y la innovación tecnológica busca contribuir al desarrollo económico, social y político del país. La ESIME, cuna de Cuauhtémoc IPN Aeroespacial, nos ha brindado la oportunidad de acceder a su laboratorio de integración y pruebas aeroespaciales, un espacio crucial para el desarrollo de proyectos en el sector.'
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
      text: 'El Instituto Politécnico Nacional (IPN), la institución pública líder en educación tecnológica de México, ha sido un pilar fundamental en nuestro desarrollo. Nos ha brindado innumerables oportunidades para fortalecer nuestro proyecto y alcanzar las competencias necesarias para destacar en las competiciones. El apoyo del IPN, enfocado en la generación, aplicación, difusión y transferencia del conocimiento científico y tecnológico, nos impulsa a ser cada día mejores como equipo y profesionales.'
    },
    {
      href: 'https://pcb-mexico.com/',
      src: PCB,
      text: 'PCB México, especialistas en tarjetas de circuitos impresos (PCB) de FR4, Flex, Arlon, Rogers, Aluminio y CEM1, es crucial para nuestro proyecto, brindándonos la impresión de las placas de cada uno de los modelos. Su trabajo no solo asegura la construcción de nuestros prototipos, sino que también nos ayuda a evitar que nuestros productos se quemen o se doblen, mejorando su durabilidad y funcionalidad. Además, optimizan el proceso de manufactura y reducen costos mediante la selección de materiales y características adecuados.'
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
