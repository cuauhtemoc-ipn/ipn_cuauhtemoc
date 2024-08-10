import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Contact } from '@/pages'
import CansatCompetition from '@/pages/projects/CansatCompetition'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects/cansat_competition' element={<CansatCompetition />} />
    </Routes>
  )
}

export default App
