import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default App
