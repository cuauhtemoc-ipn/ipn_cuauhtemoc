/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.length - 1)
  const [chunkSize, setChunksize] = useState(1)

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  useEffect(() => {
    // Function to update the variable value based on window width
    const updateVariableValue = () => {
      if (window.innerWidth > 992) {
        setChunksize(3)
      } else if (window.innerWidth > 768) {
        setChunksize(2)
      } else {
        setChunksize(1)
      }
    }
    // Event listener for window resize
    window.addEventListener('resize', updateVariableValue)

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', updateVariableValue)
    }
  }, [])

  const loadTabTitles = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <li
          className='nav-item bg-gray rounded-top-2'
          role='presentation'
          key={'title' + index}
        >
          <button
            className={`nav-link ${
              activeTab === index ? 'bg-light rounded-top-2 fw-bolder' : ''
            } text-dark`}
            id={`tab${index}`}
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected={activeTab === index}
            onClick={() => handleTabClick(index)}
          >
            {entry.edition}
          </button>
        </li>
      )
    })
    return tabs
  }

  const loadTabContent = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <div
          className={`tab-pane fade ${
            activeTab === index ? 'show active' : ''
          } bg-gray bg-opacity-25`}
          id='home'
          role='tabpanel'
          aria-labelledby={`tab${index}`}
          key={'content' + index}
        >
          <h2 className='text-center p-3 pt-4 text-light display-3'>
            {entry.name + ' ' + entry.edition}
          </h2>
          <div className='d-flex justify-content-center'>
            <img
              src={entry.mainImage}
              alt='Competition header image'
              className='col-10 col-md-7 m-3 align-self-center'
            />
          </div>

          {loadScores(entry)}
          <div className=' border-bottom border-4 border-primary w-50 mx-5'>
            <h3 className='text-primary display-5 my-4 fw-bold'>
              ¿En qué consistió?
            </h3>
          </div>
          <div className='row justify-content-center m-5'>
            {loadDescriptions(entry)}
          </div>
          <div className='container-fluid justify-content-center my-5 bg-gray bg-opacity-25 py-1'>
            <div className=' border-bottom border-4 border-primary w-50 m-5'>
              <h3 className='text-primary display-5 fw-bold '>Galería </h3>
            </div>
            <Carousel
              indicators={false}
              controls
              variant='light'
              className='pb-4'
            >
              {loadImages(entry)}
            </Carousel>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='border-bottom border-4 border-primary w-50 mx-5'>
              <h3 className='text-primary display-5 my-4 fw-bold text-center'>
                El equipo
              </h3>
            </div>
          </div>
          <div className='d-flex justify-content-center m-4'>
            <img
              src={entry.team}
              alt='Competition team image'
              className='col-10 m-4 align-self-center'
            />
          </div>
        </div>
      )
    })
    return tabs
  }

  const loadScores = entry => {
    const data = []
    entry.scores.forEach((score, index) => {
      data.push(
        <p key={'score' + index} className='text-light h4 text-center p-2'>
          {`${score.place}° lugar a nivel ${score.type}`}
        </p>
      )
    })
    return data
  }
  const loadDescriptions = entry => {
    const data = []
    entry.content.forEach((element, index) => {
      if (element.type === 'text') {
        data.push(
          <div className='col-10 col-lg-6 p-4' key={'text' + index}>
            <p className='text-light'>{element.value}</p>
          </div>
        )
      } else if (element.type === 'image') {
        data.push(
          <div className='col-10 col-lg-6 p-4'>
            <img
              src={element.value}
              alt='Image'
              className='w-100'
              key={'img' + index}
            />
          </div>
        )
      }
    })
    return data
  }
  const loadImages = entry => {
    const carouselRows = []
    const total = entry.images.length
    let size = 10
    if (chunkSize === 2) {
      size = 5
    } else if (chunkSize === 3) {
      size = 3
    }
    for (let i = 0; i < total; i += chunkSize) {
      const chunk = entry.images.slice(i, i + chunkSize)
      carouselRows.push(
        <Carousel.Item key={i}>
          <div className='row justify-content-center py-3'>
            {chunk.map(item => (
              <div className={`col-${size}`} key={item}>
                <img src={item} alt='' className='w-100' />
              </div>
            ))}
          </div>
        </Carousel.Item>
      )
    }
    return carouselRows
  }

  return (
    <div className='container-xxl pt-5 mt-5'>
      <ul className='nav nav-tabs nav-justified' id='myTab' role='tablist'>
        {loadTabTitles()}
      </ul>
      <div className='tab-content' id='myTabContent'>
        {loadTabContent()}
      </div>
    </div>
  )
}

export default Tabs
