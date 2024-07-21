import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import Header from '@/components/Header/Header'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
