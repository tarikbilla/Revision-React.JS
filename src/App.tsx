import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Header from '@/components/global/Header'
import Footers from '@/components/global/Footer'
import Home from '@/pages/Home.tsx'

function App() {

  return (
    <>
      <div className='max-w-7xl px-4 mx-auto shadow'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<Home />} />

          </Routes>
          <Footers />
        </Router>


      </div>

    </>
  )
}

export default App
