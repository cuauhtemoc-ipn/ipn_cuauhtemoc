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
    <div className='row justify-content-center align-items-center pb-3 mb-md-4 col-md-6 col-lg-4 col-xl-3'>
      <div className='text-center px-sm-4 px-md-0 my-4 col-5 col-sm-5 col-md-8'>
        <a href={data.href} target='_blank' className='tt'>
          <img src={data.src} className='img-fluid px-sm-4 px-md-0' alt='Imagen de sponsor' />
        </a>
        <Tooltip
          anchorSelect='.tt'
          place='bottom'
          className='d-none d-lg-inline'
        >
          <span dangerouslySetInnerHTML={dividetext(data.text)} />
        </Tooltip>
      </div>
      <div className='text-light d-lg-none col-12 col-sm-10'>
        <p className='my-auto text-justify' dangerouslySetInnerHTML={dividetext(data.text)} />
      </div>
    </div>
  )
}

export default SpDescrpt
