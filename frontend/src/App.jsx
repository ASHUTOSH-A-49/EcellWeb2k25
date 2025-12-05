import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route ,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Events from './components/Events/Events.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
