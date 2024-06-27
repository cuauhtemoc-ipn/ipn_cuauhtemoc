import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes'
import Header from '@/components/Header/Header'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
