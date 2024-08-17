import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import Header from '@/components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

function App () {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Header />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
