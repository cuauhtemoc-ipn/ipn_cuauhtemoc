import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Contact, Projects } from '@/pages'
import { CansatCompetition } from '@/pages/projects'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/cansat_competition' element={<CansatCompetition />} />
    </Routes>
  )
}

export default App
