import React from 'react'
import NewsCard from './NewsCard'
import image from '@/assets/ExampleNewsImage.png'

const News = () => {
  return (
    <div className='container-xxl h-100 my-4'>
      <h2 className='display-3 text-light fw-semibold'>Últimas noticias</h2>
      <div className='container-fluid row justify-content-center align-items-center'>
        <NewsCard data={{ src: image }} />
        <NewsCard data={{ src: image }} />
        <NewsCard data={{ src: image }} />
        <div className='col-10 col-md-5 col-lg-3 justify-content-center '>
          <button className='news__button btn btn-light px-5'>Ver más ➔</button>
        </div>
      </div>
    </div>
  )
}

export default News
