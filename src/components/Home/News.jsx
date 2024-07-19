import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='container-xxl h-full py-4'>
      <h2 className='display-3 text-light fw-semibold my-5'>
        Últimas noticias
      </h2>
      <div className='container-fluid row justify-content-center align-items-center m-0'>
        <div className='row justify-content-center'>
          <NewsCard
            data={{
              src: 'src/assets/instagram_1.png',
              text: 'tbt Cansat Competition 2024 🚀',
              tags: '#ipn #estudiantes #cansat2024 #esime #mexico #ingeniería #aeronautica #competencia #cuauhtemoc',
              url: 'https://www.instagram.com/p/C9VTdY_xtGR/',
              date: '2024-07-11T00:00:00Z'
            }}
          />
          <NewsCard
            data={{
              src: 'src/assets/instagram_2.png',
              text: 'Un poco de lo que fue el flight day en Cansat Competition 2024.',
              tags: '#ipn #ingenieria #estudiantes #competition #cansatcompetition #cansat2024 #mexico #esime #aeronautica',
              url: 'https://www.instagram.com/p/C9QjwIkx3Sm/',
              date: '2024-07-10T00:00:00Z'
            }}
          />
          <NewsCard
            data={{
              src: 'src/assets/instagram_3.png',
              text: `Hace unas semanas, tuvimos la oportunidad de participar en la Cansat Competition 2024, una experiencia que no solo desafió nuestros conocimientos y habilidades, sino que también nos llevó a nuevos límites y horizontes.
                    Desde el diseño y construcción de nuestro cansat , hasta el emocionante momento del lanzamiento, cada paso fue una mezcla de adrenalina, aprendizaje y trabajo en equipo.
                    No fue fácil, pero cada obstáculo superado nos demostró que juntos somos capaces de alcanzar las estrellas.Gracias a todos los que nos apoyaron y creyeron en nosotros🫶🏼.`,
              tags: '#Cansat2024 #Teamwork #Innovation #SpaceAdventure #ScienceAndTechnology #esime #ipn #ingeniería #estudiantes #competencia',
              url: 'https://www.instagram.com/p/C9AzHoAxnZ_/?img_index=1',
              date: '2024-07-11T00:00:00Z'
            }}
          />
        </div>
        <div className='row justify-content-center my-4'>
          <div className='col-10 col-md-5 col-lg-3 justify-content-center'>
            <button className='news__button btn btn-outline-light btn-lg px-5'>
              Ver más ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
