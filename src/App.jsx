import Home from './pages/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white ">
        <Navbar></Navbar>

        <div className="mx-0 min-h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/*<Route path="/services" element={<Services />} />
            <Route path="/franchise" element={<Franchise />} /> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
