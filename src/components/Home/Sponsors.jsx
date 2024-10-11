import React from 'react'
import { NavLink } from 'react-router-dom'
import SpDescrpt from './SponsDescrpt'

const Sponsor = () => {
  const sponsorsData = [
    {
      href: 'https://altair.com/altair-mexico',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPlNk52Dmzj1TRpb_OR5n1bNt-T1lUugh51D_RcLmiW-4WMYJYmksY-brV9OsGhFZ5aPFByd2i85tPEZVxhjaJkVoknIAkzQdj38Yc43orNw4_YuOzcuCSE-vh7AsPMNKT3rUd5p3bYYYfS1BPRHodv=w1066-h219-s-no?authuser=0',
      text: 'Altair, líder mundial en inteligencia computacional, nos proporciona herramientas para analizar y optimizar proyectos, además de recursos para aprender a usar sus softwares de simulación, HPC e IA. La empresa también ofrece soluciones para diversas industrias, como la automotriz, aeroespacial y la manufactura, ayudándoles a innovar, mejorar la eficiencia y reducir el impacto ambiental. Su objetivo es impulsar la innovación y decisiones inteligentes a través de la ciencia computacional, creando un futuro más conectado y sostenible.'
    },
    {
      href: 'https://www.ansys.com/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczMQvlmx5Qa1vzTfQjQt5kogZ1futZVHcCNPTX0nga7hyGTYoJXwBqVbXbKqLfSFLF-lq3eCuiyfDtxU9ivzD9bZS-S9HVEfDBs76Uz-ZuENs5-eEZgucGiR9F_W6ySoATohOxNOcXjsSq4vA5Kl607E=w792-h256-s-no?authuser=0',
      text: 'Ansys, líder en software de simulación, nos equipa con herramientas para analizar y probar la resistencia de nuestros proyectos a diferentes condiciones, además de ofrecer recursos para aprender a usar sus softwares. Sus soluciones, que van desde el transporte sostenible hasta los dispositivos médicos, permiten a los innovadores de diversas industrias avanzar en la creación de los próximos grandes saltos en la evolución humana, impulsados por la potencia predictiva de la simulación.'
    },
    {
      href: 'https://www.ipn.mx/cda/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczMVLhiweja7BEjTjpJRWzZsxWqeMKT2Q1CTcs6EibsiT0Omd8sjg43RR6mLQgyeU2n9v8XA0ERAz0vW6xGtXd4CpoD35P0g9WgYdWnQ8l6huZMOZsihvyL8pp7qd2yiYQM5lNr_VkGvlH2-FO-5wsSu=w500-h500-s-no?authuser=0',
      text: 'El Centro de Desarrollo Aeroespacial es la Unidad Académica que promueve, coordina y realiza acciones de investigación científica, desarrollo tecnológico e innovación en materia aeroespacial, fomentando la formación de capital humano altamente capacitado, el análisis de la regulación aplicable y la participación institucional en los ámbitos nacional e internacional con una perspectiva de beneficio social.'
    },
    {
      href: 'https://www.esimetic.ipn.mx/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczP3p_CoBdvVy_cXcXmR3-wmnG6tuFqHvCCLCGRpk4OlZlUdtpPpL0wbGvtJpCV-uAkZ8D7v16eo-p1DU4WkA6iIFflf7Oq-Rm7wSjnJuHm5rc0W8LMYcOqRvXImSuSBIRXUKAqKvnhFkS470gdFSOD8=w500-h500-s-no?authuser=0',
      text: 'La ESIME, Unidad Ticomán, es una institución educativa líder en México en el área aeroespacial, automotriz y aeronáutica, dedicada a la formación integral de profesionales de alto nivel. Su compromiso con la investigación y la innovación tecnológica busca contribuir al desarrollo económico, social y político del país. La ESIME, cuna de Cuauhtémoc IPN Aeroespacial, nos ha brindado la oportunidad de acceder a su laboratorio de integración y pruebas aeroespaciales, un espacio crucial para el desarrollo de proyectos en el sector.'
    },
    {
      href: 'https://www.grupossc.com/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPIeMY1OjREvgW38TD8v6FS-_o-X60ubZ2aXTtutfSPZVZPPCthobZx7r0k1Ino7ZiHhVyvz4ASGGN53w3qt9nw2th7apbbwjqihLRSFG7sQIE024TZgXyQZZKGLQpFTu7ALw9nOcQyo15gJEhMwUQb=w768-h196-s-no?authuser=0',
      text: 'En Grupo SSC somos expertos en Simulación de Ingeniería en los campos; estructurales, térmicos, de fluidos, electromagnéticos, óptica, manufactura aditiva y diseño 3D. Como representantes de Ansys Inc por mas de 32 años en México somos la empresa lider, pionera y mas grande ofreciendo a nuestros clientes las mejores herramientas de software, consultoría, formación, tutoría y soporte técnico.'
    },
    {
      href: 'https://www.fundacionpolitecnico.org/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczOP6L960CIrnrtLwAgKIkZuUTEmoqTfWOUMar34KwZzHqM_hwpOZl36QJpjEcX2p36DCudB1w5hCSwfm4E7bYXxYKS4ioVkswTLG6n4-yEMD-FsLDiI5QrQJCZfPs6sbRIOibiv3YzxAQBnwaTAKYRG=w1067-h465-s-no?authuser=0',
      text: 'Obtener  y aplicar donativos de forma transparente y eficiente para contribuir a mejorar su infraestructura, equipamiento de aulas, talleres y laboratorios en las diversas escuelas, centros, unidades y dependencias; así como otorgar becas;  propiciar estancias empresariales; aumentar la matrícula; elevar la calidad educativa y la eficiencia terminal del Instituto Politécnico Nacional.'
    },
    {
      href: 'https://www.ipn.mx/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczPjPWXQM_igJeu2VhrWHB8r8spWGJfH4GagF6aBFeAn775ZFedORYOekYZ5VfipE3PJSJTJ5s66x-9VKT01Kv7OLiRcKVsYhhYxnP2EmS5xW0D1jCtRix6bYhjQpYc_zI1Qg-2_eDtjuj5bQWzDA3lc=w500-h500-s-no?authuser=0',
      text: 'El Instituto Politécnico Nacional (IPN), la institución pública líder en educación tecnológica de México, ha sido un pilar fundamental en nuestro desarrollo. Nos ha brindado innumerables oportunidades para fortalecer nuestro proyecto y alcanzar las competencias necesarias para destacar en las competiciones. El apoyo del IPN, enfocado en la generación, aplicación, difusión y transferencia del conocimiento científico y tecnológico, nos impulsa a ser cada día mejores como equipo y profesionales.'
    },
    {
      href: 'https://pcb-mexico.com/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczN0XG19io0GGkKc0Kk8MCPiddm0KV_V0wyCRcDdkVFcNF97L9yYKbEE0N5bVypCe5HFQ1xrnyZdBm9ZdTgslJO1xEQQ2NO0ESOG64rIRVY-uqmtlNO39ozjWxF8_Bir-ATa2tbbILvWVJY6oume0AtF=w875-h250-s-no?authuser=0',
      text: 'PCB México, especialistas en tarjetas de circuitos impresos (PCB) de FR4, Flex, Arlon, Rogers, Aluminio y CEM1, es crucial para nuestro proyecto, brindándonos la impresión de las placas de cada uno de los modelos. Su trabajo no solo asegura la construcción de nuestros prototipos, sino que también nos ayuda a evitar que nuestros productos se quemen o se doblen, mejorando su durabilidad y funcionalidad. Además, optimizan el proceso de manufactura y reducen costos mediante la selección de materiales y características adecuados.'
    },
    {
      href: 'https://www.3ds.com/es/',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNWTvA7FAcVKW0XrYmgAGAURDLGJEEmE1KGK8YmiMaLjJynfx6PiQgbQVeS7uW8l2jvx6BDyioM2XQoGTWnBc-yIJLyAZy6sVzfLGrjEy3czvZZeW7TcDq42YHxhfSxkoTY6-rhg-LHIV-jtXh-ZHsS=w1593-h482-s-no?authuser=0',
      text: 'Mensaje o texto sobre cómo apoya Dassault.'
    },
    {
      href: 'https://www.altium.com/es',
      src: 'https://lh3.googleusercontent.com/pw/AP1GczNPDe5z31dMYJZV4KVPnIBffKC8_lh4xoqkGX42_hBSd86AjIVhKnjl39wfEBL0f7KgqRVpssW_tYsYkLCdy2whQ_Ycv11973H_lokGtSetnlcpJQKB3nHx3nco7GE1Hy_Va-CXutJe2oi9W5azzLvl=w400-h199-s-no?authuser=0',
      text: 'Mensaje o texto sobre cómo apoya Altium.'
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
