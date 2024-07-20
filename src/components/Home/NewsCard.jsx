/* eslint-disable react/prop-types */
import React from 'react'

const NewsCard = ({ data }) => {
  const formatDate = dateString => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const day = date.getDate()
    let month = date.toLocaleString('es-ES', { month: 'long' })
    month = month.charAt(0).toUpperCase() + month.slice(1)

    return { year, day, month }
  }
  const { year, day, month } = formatDate(data.date)
  return (
    <div className='col-10 col-md-6 col-lg-4 news my-4 px-3 shadow h-100'>
      <aside className='m-2 bg-light text-dark text-center p-1 news__date'>
        <div className='fs-6 mt-01 mx-3'>{year}</div>
        <div className='fw-semibold fs-1 mt-01'>{day}</div>
        <div className='fs-7 mt-03'>{month}</div>
      </aside>
      <a className='news__image ratio ratio-1x1' href={data.url}>
        <img
          src={data.src}
          alt='News photo'
          className='w-100 object-fit-cover'
        />
      </a>

      <div className='bg-light text-dark p-3 ratio ratio-21x9 ratio-md-16x9 ratio-lg-21x9 overflow-auto'>
        <div className='p-2'>
          {data.text.length > 255 ? data.text.slice(0, 255) + '...' : data.text}
          <div className='text-dark fw-bold fst-italic align-self-bottom mt-2'>{data.tags}</div>

        </div>
      </div>
    </div>
  )
}

export default NewsCard
