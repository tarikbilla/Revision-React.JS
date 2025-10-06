import { useState } from 'react'
// import './css/App.css'
import Header from './assets/components/Header.tsx'
import Footers from './assets/components/Footer.tsx'

function App() {

  return (
    <>
      <div className='max-w-7xl px-4 mx-auto shadow'>
        <Header />

        <Footers />

      </div>

    </>
  )
}

export default App
