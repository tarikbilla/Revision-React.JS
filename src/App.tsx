import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from '@/components/global/Header'
import Footers from '@/components/global/Footer'
import Home from '@/pages/Home'
import { Learnes } from "./pages/learning/Learnes"
import NotFound from "./pages/404"
import Env from "./pages/learning/Env"
import JsxRendering from "./pages/learning/JsxRendering"
import Components from "./pages/learning/Components"
import WeatherApp from "./pages/projects/weatherApp/weather"

function App() {

  return (
    <>
      <div className='max-w-7xl px-4 mx-auto shadow'>
        <Router>
          <Header />
          <main className="my-5">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/learnes' element={<Learnes />} />
              <Route path='/env' element={<Env />} />
              <Route path='/jsxrendering' element={<JsxRendering />} />
              <Route path='/components' element={<Components />} />
              <Route path='/weatherapp' element={<WeatherApp />} />

              <Route path='*' element={<NotFound />} />

            </Routes>
          </main>
          <Footers />
        </Router>


      </div>

    </>
  )
}

export default App
