/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react'
import TabComponent from './TabComponent'

const Tabs = ({ data }) => {
  // const [activeTab, setActiveTab] = useState(data.length - 1)
  const [activeTab, setActiveTab] = useState(data[data.length - 1].edition)
  const references = []
  for (let index = 0; index < data.length; index++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    references.push(useRef(null))
  }

  const handleTabClick = tab => {
    setActiveTab(tab)
  }
  const loadTabTitles = () => {
    const tabs = []
    data.forEach((entry, index) => {
      tabs.push(
        <li
          className='nav-item bg-gray rounded-top-2 border-start border-end border-2'
          role='presentation'
          key={'title' + index}
        >
          <button
            className={`nav-link ${
              activeTab === entry.edition ? 'bg-light rounded-top-2 fw-bolder' : ''
            } text-dark`}
            id={`tab${entry.edition}`}
            data-bs-toggle='tab'
            type='button'
            role='tab'
            aria-controls='home'
            aria-selected={activeTab === entry.edition}
            onClick={() => handleTabClick(entry.edition)}
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
        <TabComponent
          entry={entry}
          index={entry.edition}
          activeTab={activeTab}
          key={index + 'content'}
          reference={references[index]}
        />
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
