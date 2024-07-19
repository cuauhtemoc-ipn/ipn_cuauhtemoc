/* eslint-disable react/prop-types */
import React from 'react'
import { Tooltip } from 'react-tooltip'

const SpDescrpt = ({ data }) => {
  const dividetext = text => {
    const regex = new RegExp(`\\S.{0,${60 - 1}}\\S(?=\\s|$)|\\S+`, 'g')
    /* return { __html: text.match(/.{1,60}/g).join('<br>') } */
    return { __html: text.match(regex).join('<br>') }
  }

  return (
    <div className='row justify-content-center py-2 my-md-4 col-md-5 col-lg-4 col-xl-3'>
      <div className='text-center my-4 my-sm-auto col-10 col-sm-5 col-md-10 col-lg-8'>
        <a href={data.href} target='_blank' className='tt'>
          <img src={data.src} className='img-fluid' alt='Imagen de sponsor' />
        </a>
        <Tooltip
          anchorSelect='.tt'
          place='bottom'
          className='d-none d-md-inline'
        >
          <span dangerouslySetInnerHTML={dividetext(data.text)} />
        </Tooltip>
      </div>
      <div className='text-light d-md-none col-12 col-sm-6'>
        <p dangerouslySetInnerHTML={dividetext(data.text)} />
      </div>
    </div>
  )
}

export default SpDescrpt
