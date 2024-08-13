import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Contact } from '@/pages'
import { CansatCompetition, Enmice, CansatCucei, Pico } from '@/pages/projects'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route
        path='/projects/cansat_competition'
        element={<CansatCompetition />}
      />
      <Route path='/projects/cansat_cucei' element={<CansatCucei />} />
      <Route path='/projects/enmice' element={<Enmice />} />
      <Route path='/projects/picosatelites_puebla' element={<Pico />} />
    </Routes>
  )
}

export default App
