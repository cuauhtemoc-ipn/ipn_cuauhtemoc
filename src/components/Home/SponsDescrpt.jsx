/* eslint-disable react/prop-types */
import React from 'react'
import { Tooltip } from 'react-tooltip'

const SpDescrpt = ({ data }) => {
  const dividetext = text => {
    return { __html: text.match(/.{1,60}/g).join('<br>') }
  }

  return (
    <div className='text-start text-md-center my-4 px-5 px-md-2 col-md-10 col-lg-5 col-xl-3'>
      <div className='row justify-content-center '>
        <div className='text-center col-5'>
          <a href={data.href} target='_blank' className='tt'>
            <img
              src={data.src}
              className='col-md-4'
              alt='Imagen de sponsor'
            />
          </a>
          <Tooltip
            anchorSelect='.tt'
            place='bottom'
            className='d-none d-md-inline'
          >
            <span dangerouslySetInnerHTML={dividetext(data.text)} />
          </Tooltip>
        </div>
        <div className='text-light d-md-none col-5'>
          <p dangerouslySetInnerHTML={dividetext(data.text)} />
        </div>
      </div>
    </div>
  )
}

export default SpDescrpt
