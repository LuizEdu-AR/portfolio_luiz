import Header from './assets/components/Header'
import MainHome from './assets/components/MainHome'
import About from './assets/components/About'
import ServiceSection from './assets/components/ServiceSection'
import Skill from './assets/components/Skill'
import ProjectSection from './assets/components/ProjectSection'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
import FallingStars from './assets/components/BackgroundDots'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='App'>
          <FallingStars />
          <Header />
          <MainHome />
          <About />
          <ServiceSection />
          <Skill />
          <ProjectSection />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
