/* eslint-disable react/prop-types */
import React from 'react'

const NewsCard = ({ data }) => {
  return (
    <div className='col-10 col-md-5 col-lg-3 news'>
      <aside className='m-2 bg-light text-dark text-center p-1 news__date'>
        <div className='fs-6'>2024</div>
        <div className='fw-semibold fs-1 mt-01'>12</div>
        <div className='fs-7 mt-03'>Septiembre</div>
      </aside>
      <img src={data.src} alt='News photo' className='w-100 news__image' />
      <div className='bg-light text-dark p-3'>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio earum reprehenderit maxime ex nihil unde, et, quas ipsum harum asperiores quaerat fugiat nemo perferendis tempora quae explicabo libero ab.</div>
      </div>
    </div>
  )
}

export default NewsCard
