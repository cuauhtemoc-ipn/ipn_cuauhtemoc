/* eslint-disable react/prop-types */
import React from 'react'
import { Tooltip } from 'react-tooltip'

const SpDescrpt = ({ data }) => {
  const dividetext = text => {
    return { __html: text.match(/.{1,60}/g).join('<br>') }
  }

  return (
    <div className='text-center my-4 col-md-10 col-lg-5 col-xl-3'>
      <a href={data.href} target='_blank' className='tt'>
        <img src={data.src} className='col-md-4 h-75' alt='Imagen de sponsor' />
      </a>
      <Tooltip anchorSelect='.tt' place='bottom'>
        <span dangerouslySetInnerHTML={dividetext(data.text)} />
      </Tooltip>
    </div>
  )
}

export default SpDescrpt
