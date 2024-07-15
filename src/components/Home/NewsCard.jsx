/* eslint-disable react/prop-types */
import React from 'react'

const NewsCard = ({ data }) => {
  return (
    <div className='col-10 col-md-6 col-lg-4 news my-4 px-3 shadow'>
      <aside className='m-2 bg-light text-dark text-center p-1 news__date'>
        <div className='fs-6 mt-01'>2024</div>
        <div className='fw-semibold fs-1 mt-01'>12</div>
        <div className='fs-7 mt-03'>Septiembre</div>
      </aside>
      <img src={data.src} alt='News photo' className='w-100 news__image' />
      <div className='bg-light text-dark p-3  flex-grow-1'>
        <div>
          {data.text.length > 255 ? data.text.slice(0, 255) + '...' : data.text}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
