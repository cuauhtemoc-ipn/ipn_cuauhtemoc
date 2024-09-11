/* eslint-disable react/prop-types */
import React from 'react'
import { Tooltip } from 'react-tooltip'

const SpDescrpt = ({ data, index }) => {
  const dividetext = text => {
    const regex = new RegExp(`\\S.{0,${60 - 1}}\\S(?=\\s|$)|\\S+`, 'g')
    /* return { __html: text.match(/.{1,60}/g).join('<br>') } */
    return { __html: text.match(regex).join('<br>') }
  }

  const fullTextForTooltip = dividetext(data.text)

  const uniqueId = `tooltip-${index}`

  return (
    <div className='row justify-content-center align-items-center pb-3 mb-md-4 col-md-6 col-lg-4 col-xl-3'>
      <div className='text-center px-sm-4 px-md-0 my-4 col-5 col-sm-5 col-md-8'>
        <a href={data.href} target='_blank' className={`tt-${uniqueId}`}>
          <img src={data.src} className='img-fluid px-sm-4 px-md-0' alt='Imagen de sponsor' />
        </a>
        <Tooltip
          anchorSelect={`.tt-${uniqueId}`}
          place='bottom'
          className='d-none d-lg-inline text-justify'
        >
          <span dangerouslySetInnerHTML={fullTextForTooltip} />
        </Tooltip>
      </div>
      <div className='text-light d-lg-none col-12 col-sm-10'>
        <p className='my-auto text-justify'>{data.text}</p>
      </div>
    </div>
  )
}

export default SpDescrpt
