import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import ResumeButton from './components/ResumeButton'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AboutMe />
          <Skills />
          <Projects />
          <Recommendations />
          <Contact />
        </main>
        <ResumeButton />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
