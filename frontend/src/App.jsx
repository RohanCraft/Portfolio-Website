import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  )
}

export default App
