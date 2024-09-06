import React, { useState } from 'react'
import './Popup.css' // Optional: For custom styles

// eslint-disable-next-line react/prop-types
const Popup = ({ handleClose, show, children }) => {
  // Toggle the visibility of the popup
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  )
}

const App = () => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div>
      <h1>React Pop-Up Example</h1>
      <button onClick={togglePopup}>Show Pop-Up</button>

      <Popup show={showPopup} handleClose={togglePopup}>
        <h2>Gracias por comunicarte</h2>
        <p>Nos comunicaremos pronto contigo.</p>
      </Popup>
    </div>
  )
}

export default App
