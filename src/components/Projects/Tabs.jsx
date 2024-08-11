/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import TabComponent from './TabComponent'

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.length - 1)

  const handleTabClick = tab => {
    setActiveTab(tab)
  }
  const loadTabTitles = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <li
          className='nav-item bg-gray rounded-top-2 border-start border-end'
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
        <TabComponent entry={entry} index={index} activeTab={activeTab} key={index + 'content'} />
      )
    })
    return tabs
  }

  return (
    <div className='container-lg pt-5 mt-5'>
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
