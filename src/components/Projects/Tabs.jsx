/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.length - 1)

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  const loadTabTitles = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <li className='nav-item bg-gray rounded-top-2' role='presentation'>
          <button
            className={`nav-link ${activeTab === index ? 'bg-light rounded-top-2 fw-bolder' : ''} text-dark`}
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
        >
          <h2 className='text-center p-3 pt-4 text-light display-3'>{entry.name + ' ' + entry.edition}</h2>
          <img src={entry.mainImage} alt='Competition header image' className='col-10 col-md-7 m-3 align-self-center' />
        </div>
      )
    })
    return tabs
  }

  return (
    <div className='container-xxl pt-5 mt-5 mb-5'>
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
