import { Routes, Route } from 'react-router-dom'
import { Home, AboutUs, Sponsors, JoinUs, ContactUs } from '@/pages'
import { CansatCompetition, Enmice, CansatCucei, Pico } from '@/pages/proyectos'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/sponsors' element={<Sponsors />} />
      <Route path='/joinUs' element={<JoinUs />} />
      <Route
        path='/projects/cansat_competition'
        element={<CansatCompetition />}
      />
      <Route path='/projects/cansat_cucei' element={<CansatCucei />} />
      <Route path='/projects/enmice' element={<Enmice />} />
      <Route path='/projects/picosatelites_puebla' element={<Pico />} />
      <Route path='/contact' element={<ContactUs />} />
    </Routes>
  )
}

export default App
