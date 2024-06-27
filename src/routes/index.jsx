import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Contact, Projects } from '@/pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  )
}

export default App
