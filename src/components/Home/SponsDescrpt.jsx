/* eslint-disable react/prop-types */
import React from 'react'
import { Tooltip } from 'react-tooltip'
import info from '@/content/Sponsors.json'

const SpDescrpt = () => {
  const dividetext = text => {
    const regex = new RegExp(`\\S.{0,${60 - 1}}\\S(?=\\s|$)|\\S+`, 'g')
    /* return { __html: text.match(/.{1,60}/g).join('<br>') } */
    return { __html: text.match(regex).join(' ') }
  }

  const sponsordescrpt = (sponsor, index) => {
    const fullTextForTooltip = dividetext(sponsor.description)

    const uniqueId = `tooltip-${index}`

    return (
      <div
        key={index}
        className='row justify-content-center align-items-center pb-3 mb-md-4 col-md-6 col-lg-4 col-xl-3'
      >
        <div className='text-center px-sm-4 px-md-0 my-4 col-5 col-sm-5 col-md-8'>
          <a href={sponsor.page} className={`tt-${uniqueId}`} target='_blank'>
            <img
              src={sponsor.imagemain}
              className='img-fluid px-sm-4 px-md-0'
              alt={sponsor.name}
            />
          </a>
          <Tooltip
            anchorSelect={`.tt-${uniqueId}`}
            place='bottom'
            className='d-none d-lg-inline lead custom-tooltip'
          >
            <span dangerouslySetInnerHTML={fullTextForTooltip} />
          </Tooltip>
        </div>
        <div className='text-light d-lg-none col-12 col-sm-10'>
          <p className='my-auto text-justify'>{sponsor.description}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='row mx-0 justify-content-center align-items-center'>
      {info.data.map((sponsor, index) => sponsordescrpt(sponsor, index))}
    </div>
  )
}

export default SpDescrpt
